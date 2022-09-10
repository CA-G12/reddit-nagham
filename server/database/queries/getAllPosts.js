const connection = require('../config/connection');

const getAllposts = ()=>{
    return connection.query('select posts.post_id,posts.post_text,users.user_fullname,users.user_img from posts,users where posts.userId = users.id');
}

module.exports = getAllposts;
// select checkes.*,users.* from (select posts.* from posts,votes where posts.post_id = votes.post_id group by posts.post_id order by count(votes.post_id) desc) as checkes, users where users.id=checkes.userid ;