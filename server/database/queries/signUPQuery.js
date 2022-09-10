const connection = require('../config/connection');

const signup = ({name,email,hasdPassword})=>{
     const image = "https://i.pinimg.com/originals/6b/0f/44/6b0f44048b68a9297c62b2ce3908bcbf.jpg";
     return connection.query('insert into users (user_fullname,email,user_password,user_img) values ($1,$2,$3,$4) RETURNING *',
     [name,email,hasdPassword,image]);
}

module.exports = signup;
