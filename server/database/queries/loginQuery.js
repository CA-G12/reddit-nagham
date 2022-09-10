const connection = require("../config/connection");

const login = ( { email } )=>{
    return connection.query('select * from users where email=$1;',[email]);
}

module.exports = login;