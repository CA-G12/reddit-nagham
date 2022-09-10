const connection = require("../config/connection");

const addPost = ({postText, userId})=>{
    return connection.query('insert into posts(post_text,userId) values($1,$2) RETURNING *;',
    [postText, userId]);
}

module.exports = addPost;