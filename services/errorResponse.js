module.exports = (res, err) => {
    res.writeHead(400, { "Content-Type": "application/json"})
       .end(JSON.stringify({ 
            status: "Failed",
            message: err
        }))
}