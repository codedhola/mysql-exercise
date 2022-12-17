const mysql = require("mysql2/promise")
const { DB_HOST, DB_USER, DB_PASSWORD } = require("../env")


  const Pool = mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  })


module.exports = Pool 