const {bookController} = require("./../controllers/bookController")
const bookRoutes = function(req, res){

    // GET ALL BOOKS
    if(req.url === "/api/books" && req.method === "GET"){
        res.writeHead(200, { "Content-Type": "application/json"})
        res.end(JSON.stringify({
            status: "Successful",
            message: "This is a Book route"
        }))
    }

    // GET A SINGLE BOOK
    if(req.url === "/api/books/ID" && req.method === "GET"){
        res.writeHead(200, { "Content-Type": "application/json"})
        res.end(JSON.stringify({
            status: "Successful",
            message: "This is a Book route"
        }))
    }

     // CREATE A SINGLE BOOK
     if(req.url === "/api/books" && req.method === "POST"){
        res.writeHead(201, { "Content-Type": "application/json"})
        res.end(JSON.stringify({
            status: "Successful",
            message: "CREATING A BOOK"
        }))
    }

     // UPDATE A BOOK
     if(req.url === "/api/books/ID" && req.method === "PATCH"){
        res.writeHead(200, { "Content-Type": "application/json"})
        res.end(JSON.stringify({
            status: "Successful",
            message: "UPDATING BOOK"
        }))
    }

     // DELETE A SINGLE BOOK
     if(req.url === "/api/books/ID" && req.method === "DELETE"){
        res.writeHead(204, { "Content-Type": "application/json"})
        res.end(JSON.stringify({
            status: "Successful",
            message: "DELETING"
        }))
    }
}

module.exports = {bookRoutes}