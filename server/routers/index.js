const router = require("express").Router();
const {addUser, loginPage,logout,addPosts,getPost, addVote,votesCount} = require('../controllers');
const isLoged = require("../middleware/isLoged");

router.post('/signup', addUser);
router.post('/login',loginPage);
router.post('/addPost',isLoged);
router.get('/isloged',isLoged); 
router.get('/logout',logout);
router.post('/createPost',addPosts);
router.get('/getAllPosts',getPost);
router.post('/Vote',isLoged);
router.post('/voting',addVote);
router.post('/votesCount',votesCount);


module.exports = router;