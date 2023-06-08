const mysql = require('mysql2/promise');

const path = require('path');

require('dotenv').config({
    path: path.join(__dirname, '.env')
  });
//npm i nodemon 해 주기
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DB,
    port: 1234,
});

pool.query("SELECT * FROM player")
  .then(([results]) => {
    for(const r of results) {
      console.log(r);
    }
  })