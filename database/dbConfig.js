const Pool = require('pg').Pool

const DB = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'test',
    password: 'developer',
  })

DB.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack)
  }
  
  console.log(connected )
})

module.exports = DB