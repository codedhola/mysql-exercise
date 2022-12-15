const {getAllBooks, getBookById} = require("./../controllers/bookController")
const bookRoutes = function(req, res){

    // GET ALL BOOKS
    if(req.url === "/api/books" && req.method === "GET"){
        getAllBooks(req, res)
    }

    // GET A SINGLE BOOK
    if(req.url.match(/\/api\/books\/[0-9]/) && req.method === "GET"){
        const urlId = req.url.split("/")[3]
        console.log(urlId)
        getBookById(req, res, urlId)
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