const http = require("http")
const mysql = require("mysql")
const {bookRoutes} = require("./routes/bookRoute")
const {userRoutes} = require("./routes/userRoute")
const { DB_HOST, DB_USER, DB_PASSWORD } = require("./env")

const connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: "my_sql_exercise"

})

connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
  
    console.log('connected as id ' + connection.threadId);
  });


const server = http.createServer((req, res) => {
    
    bookRoutes(req, res) // BOOK ROUTES
    
    userRoutes(req, res) // USER ROUTES

    if(req.url === "/api"){
        res.writeHead(404, { "Content-Type": "application/json"})
        res.end(JSON.stringify({
            status: "Failed",
            message: "please navigate to '/api/books' or /api/users/login''" 
        }))
    }



    // else if(req.url === "/createDB"){
    //     let sql = "CREATE DATABASE my_sql_exercise"
    //     connection.query(sql, (err, result) => {
    //         if(err) throw error
    //         console.log(result)
    //         res.end("Database Created succesfully");
    //     })
    // }

    else if(req.url === "/createTable"){
        let sql = "CREATE TABLE books(id INT NOT NULL AUTO_INCREMENT, name VARCHAR(75) NOT NULL, author VARCHAR(50), genre VARCHAR(50), price INT NOT NULL, primary key(id));"
        connection.query(sql, (err, result) => {
            if(err) throw err
            console.log(result)
            res.end("Table Created");
        })
    }

    else if(req.url === "/createBook"){
        const body = { name: "Harry potter", author: "J.K Rowling", genre: "Magic", price: 80}
        let sql = "INSERT INTO books SET ?"
        connection.query(sql, body, (err, result) => {
            if(err) throw err
            console.log(result)
            res.end("posted book")
        })
    }

    else if(req.url === "/editBook"){
        const body = { name: "Harry potter", author: "J.K Rowling", genre: "Magic", price: 80}
        let sql = "UPDATE books SET ?"
        connection.query(sql, body, (err, result) => {
            if(err) throw err
            console.log(result)
            res.end("posted book")
        })
    }


    else{
        res.writeHead(404, { "Content-Type": "application/json"})
        res.end(JSON.stringify({
            status: "Failed",
            message: "Resource your are trying to get doesn't exist yet" 
        }))
    }

    console.log(req.url, req.method)
})

const PORT = 8080;
server.listen(PORT, () => {
    console.log(`SERVER LISTENING ON PORT ${PORT}`)
})
