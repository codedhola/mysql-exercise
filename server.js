const http = require("http")
const {bookRoutes} = require("./routes/bookRoute")
const {userRoutes} = require("./routes/userRoute")

const server = http.createServer((req, res) => {

    bookRoutes(req, res)

    userRoutes(req, res)
    console.log(req.url)
    res.writeHead(200, { "Content-Type": "application/json"})
    res.end(JSON.stringify({
        status: "Success",
        message: "working on routing"
    }))
})

const PORT = 8080;
server.listen(PORT, () => {
    console.log(`SERVER LISTENING ON PORT ${PORT}`)
})
