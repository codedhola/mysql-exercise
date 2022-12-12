const bookRoutes = function(req, res){
    if(req.url === "/api/books"){
        res.writeHead(200, { "Content-Type": "application/json"})
        res.end(JSON.stringify({
            status: "Successful",
            message: "THis is a Book route"
        }))
    }
}

module.exports = {bookRoutes}