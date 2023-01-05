const Pool = require('pg').Pool

const DB = new Pool({
    user: 'postgres',
    password: 'developer',
    database: 'test',
    host: 'localhost',
    port: 5432,
  })

DB.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack)
  }
  
  console.log("connected" )
})

module.exports = DB