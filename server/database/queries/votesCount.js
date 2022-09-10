const connection = require("../config/connection");

const numberOfVotes = ({post_id})=>{
    return connection.query('select count(*) from votes where post_id=$1;',[post_id]);
}

module.exports = numberOfVotes;