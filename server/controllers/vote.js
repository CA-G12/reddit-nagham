const { vote } = require("../database/queries");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const addVote = (req,res)=>{
     vote({post_id:req.body.post_id, user_id:req.body.user_id.id});
     res.send({success: "true"});

}

module.exports = addVote;