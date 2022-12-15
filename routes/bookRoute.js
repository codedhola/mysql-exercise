const {getAllBooks, getBookById, postABook, editABook, deleteBookById} = require("./../controllers/bookController")
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
        postABook(req, res)
    }

     // UPDATE A BOOK
     if(req.url.match(/\/api\/books\/([0-9]+)/) && req.method === "PATCH"){
        const id = req.url.split("/")[3]
        editABook(req, res, id)
    }

     // DELETE A SINGLE BOOK
     if(req.url.match(/\/api\/books\/([0-9]+)/) && req.method === "DELETE"){
        const id = req.url.split("/")[3]
        deleteBookById(req, res, id)
    }
}

module.exports = {bookRoutes}