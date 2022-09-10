const signup = require("./signUPQuery");
const login = require("./loginQuery");
const addPost = require("./addPosts");
const getAllposts = require('./getAllPosts');
const vote = require("./vote");
const numberOfVotes = require('./votesCount');


module.exports = {signup,login,addPost,getAllposts,vote,numberOfVotes};