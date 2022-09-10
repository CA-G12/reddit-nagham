const jwt = require("jsonwebtoken");
const { login } = require("../database/queries");
const bcrypt = require("bcryptjs");
const Joi = require("joi");
require("dotenv").config();

const loginPage = (req, res) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
  });

  const result = schema.validate(req.body);
  if (result.error) {
    res.send({ msg: result.error.details[0].message });
  } else {
    const inputpass = req.body.password;
    login(req.body).then((data) => {
      if (data.rows.length > 0) {
        let user = data.rows[0];
        bcrypt.compare(inputpass, user["user_password"], (err, success) => {
          if (err) {
            res.send({ msg: 500 });
          } else {
            if (!success) {
              res.send({ msg: "wrong Password" });
            } else {
              jwt.sign(
                user,
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
            }
          }
        });
      } else {
        res.send("user not found");
      }
    });
  }
};

module.exports = loginPage;
