const mysql = require("mysql2/promise")
const { DB_HOST, DB_USER, DB_PASSWORD } = require("../env")

  console.log(DB_USER)
  const Pool = mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD
  })


module.exports = Pool 