const mysql = require("mysql")
const { DB_HOST, DB_USER, DB_PASSWORD } = require("../env")

const Connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: "my_sql_exercise"

})

Connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
  
    console.log('connected as id ' + Connection.threadId);
  });

module.exports = { Connection }