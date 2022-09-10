const {numberOfVotes} = require('../database/queries');
const jwt = require("jsonwebtoken");
require("dotenv").config();

const votesCount = (req,res)=>{
    numberOfVotes({post_id: req.body.post_id}).then(data => res.send(data));
}


module.exports = votesCount;