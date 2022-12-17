const http = require("http")
const {bookRoutes} = require("./routes/bookRoute")

const server = http.createServer((req, res) => {
    
    
    bookRoutes(req, res) // BOOK ROUTES

    if(req.url === "/api"){
        res.writeHead(404, { "Content-Type": "application/json"})
        res.end(JSON.stringify({
            status: "Failed",
            message: "please navigate to '/api/books' or /api/users/login''" 
        }))
    }
    // else{
    //     res.writeHead(404, { "Content-Type": "application/json"})
    //     res.end(JSON.stringify({
    //         status: "Failed",
    //         message: "Resource your are trying to get doesn't exist yet" 
    //     }))
    // }

    console.log(req.url, req.method)

    // DB EXTRAS {
    // DBServices(req,res, "/createdb", Query.createDB);
    // DBServices(req,res, "/createBook", Query.createBook);
    // DBServices(req,res, "/createUser", Query.createUser);
})

const PORT = 8080;
server.listen(PORT, () => {
    console.log(`SERVER LISTENING ON PORT ${PORT}`)
})
