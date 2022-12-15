const {connection} = require("./../database/dbConfig")























// const Query = {
//     createDB: "CREATE DATABASE my_sql_exercise;",
//     createBook: "CREATE TABLE books(id INT NOT NULL AUTO_INCREMENT, name VARCHAR(75) NOT NULL, author VARCHAR(50), genre VARCHAR(50), price INT NOT NULL, primary key(id));",
//     createUser: "CREATE TABLE users(id INT NOT NULL AUTO_INCREMENT, name VARCHAR(100), email VARCHAR(75) NOT NULL, password VARCHAR(255), admin  TINYINT(1) DEFAULT 0, primary key(id));"
// }

// function DBServices(req, res, route, query){
//     if(req.url === route){ // "/createDB"
//         let sql = query // "CREATE DATABASE my_sql_exercise"
//         connection.query(sql, (err, result) => {
//             if(err) throw err
//             console.log(result)
//             res.end("Database Created succesfully");
//         })
//     }

//     else if(req.url === route){ // "/createTable"
//         let sql = query // "CREATE TABLE books(id INT NOT NULL AUTO_INCREMENT, name VARCHAR(75) NOT NULL, author VARCHAR(50), genre VARCHAR(50), price INT NOT NULL, primary key(id));"
//         connection.query(sql, (err, result) => {
//             if(err) throw err
//             console.log(result)
//             res.end("Table Created");
//         })
//     }
// }

// module.exports = { DBServices , Query}