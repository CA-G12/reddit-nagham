const bcrypt = require("bcryptjs");
const { signup } = require("../database/queries");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

const addUser = (req, res) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
    // image: Joi.string().required()
  });
  const signupValidation = schema.validate(req.body);
  if (signupValidation.error) {
    res.send({ msg: signupValidation.error.details[0].message });
  } else {
    const { name, email, password } = req.body;
    bcrypt.hash(password, 10, (err, hasdPassword) => {
      signup({ name, email, hasdPassword }).then((data) => {
        const { id, user_fullname, user_img } = data.rows[0];
        jwt.sign(
          { id, user_fullname, user_img },
          process.env.SECRET_KEY,
          { algorithm: "HS256" },
          (err, token) => {
            if (err) {
              res.send({ msg: "token error" });
            } else {
              res.cookie("user", token).send({ success: "success" });
            }
          }
        );
      });
    });
  }
};

module.exports = addUser;
