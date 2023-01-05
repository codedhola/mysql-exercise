const express = require("express")
const bookRoute = require("./routes/bookRoute")
require("dotenv").config()

const app = express()
app.use(express.json())

app.use("/api/v1/books", bookRoute)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`server running on instance ${PORT}`)
})