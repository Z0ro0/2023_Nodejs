const mysql = require('mysql2');
//npm i nodemon 해 주기
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'lck',
    port: 1234,
});

pool.query("select * from player", (err, results) => {
    console.log(results);
});
