const { getAllposts } = require('../database/queries');

const getPost = (req,res)=>{
    getAllposts().then(data => res.send(data));
}

module.exports = getPost;