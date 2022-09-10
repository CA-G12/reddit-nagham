const connection = require("../config/connection");

const vote = ({post_id, user_id})=>{
  return connection.query('select count(id) from votes where post_id=$1 and userid=$2',[post_id,user_id])
  .then(result => {
      if(result.rows[0].count == 0){
        return connection.query('insert into votes (post_id,upvote,userId) values($1,true,$2);',[post_id,user_id]);
      }else{
        return connection.query('delete from votes where userid= $1 and post_id= $2;' , [user_id,post_id]);
      }
  });
}

module.exports = vote;