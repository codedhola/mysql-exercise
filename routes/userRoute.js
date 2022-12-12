const {userController} = require("./../controllers/userController")
const userRoutes = function(req, res){
    if(req.url === "/api/users"){
        res.writeHead(200, { "Content-Type": "application/json"})
        res.end(JSON.stringify({
            status: "Successful",
            message: "THis is a user route"
        }))
    }
}

module.exports = {userRoutes}