const mysql = require("mysql2");

const conn = mysql.createConnection({
    connectionLimit : 10,
    user:process.env.DB_USER,
    host:process.env.DB_HOST,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE,
    port:process.env.DB_PORT
});


conn.connect((err)=>{
    if(err) throw err;
    console.log("DB connected");
});


module.exports = conn;