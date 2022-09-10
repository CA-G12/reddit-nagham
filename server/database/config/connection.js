const { Pool } = require('pg');
require('dotenv').config();

let DATABASE_URL = '';
if(process.env.NODE_ENV === 'development'){
     DATABASE_URL = process.env.DEVELOPMENT_DATABASE;
}else if(process.env.NODE_ENV === 'production'){
    DATABASE_URL = process.env.PRODUCTION_DATABASE;
}else if(process.env.NODE_ENV === 'testing'){
    DATABASE_URL = process.env.TESTION_DATABASE
}else{
    console.log('NO DATABASE CONNECTION');
}

const connection = new Pool({
    connectionString : DATABASE_URL
})

module.exports = connection;