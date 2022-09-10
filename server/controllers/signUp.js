const bcrypt = require('bcryptjs');
const  { signup } = require('../database/queries');
const Joi = require('joi');


const addUser = (req, res)=>{
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        // image: Joi.string().required()
    })
    const signupValidation = schema.validate(req.body);
    if(signupValidation.error){
        res.send({msg: signupValidation.error.details[0].message})
    }else{
    const {name,email,password,image} = req.body;
    bcrypt.hash(password,10,(err,hasdPassword)=>{
        signup({name,email,hasdPassword,image}).then(res.send({success: "added Successfuly"}));
    })
}
}

module.exports = addUser;