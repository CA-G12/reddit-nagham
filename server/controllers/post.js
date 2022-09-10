const jwt = require("jsonwebtoken");
const { addPost } = require("../database/queries");
require("dotenv").config();

const addPosts = (req,res)=>{
    const user = req.cookies.user;
    jwt.verify(user, process.env.SECRET_KEY,(error,result)=>{
        if(error){
            res.send({msg: "error"});
        }else{
            let userId = result.id;
            addPost({postText:req.body.content,userId});
            res.redirect('/');
        }
    }) 
  

   
}

module.exports = addPosts;