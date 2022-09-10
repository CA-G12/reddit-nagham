const loginPage = require('./loginProcess');
const logout = require('./logout');
const addPosts = require('./post');
const addUser = require('./signUp');
const getPost = require('./getAllPosts');
const addVote = require('./vote');
const  votesCount = require('./checkVoted');




module.exports = {addUser,loginPage,logout,addPosts,getPost,addVote,votesCount};