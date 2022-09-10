const jwt = require("jsonwebtoken");
require('dotenv').config();


const isLoged = (req,res)=>{
    if(!req.cookies['user']){
       res.send({ msg : 'you have to login'})
    }else{
        jwt.verify(
            req.cookies['user']
            ,process.env.SECRET_KEY,
            (error,result)=>{
                if(error){
                    res.send({msg: 'problem'});
                }else{
                    // console.log(result); //user Information
                    res.send(result);
                }
            }
        )
    }
}


module.exports = isLoged;