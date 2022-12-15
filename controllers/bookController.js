const {Connection } = require("./../database/dbConfig")

const getAllBooks = (req, res) => {
    try {
        const query = "SELECT * FROM books"
        Connection.query(query, function (error, results, fields) {
            if (error) throw error;
           console.log(results)
            res.writeHead(200, { "Content-Type": "application/json"})
            res.end(JSON.stringify({
            status: "Successful",
            message: results
        }))
          })
    }catch(err){
        console.log(err)
    }
}

const getBookById = (req, res, id) => {
    const query = "SELECT * FROM books WHERE id = ?"
    Connection.query(query, [id], function(error, results, fields){
        if(error) throw error;
        res.writeHead(200, { "Content-Type": "application/json"})
            .end(JSON.stringify({
                status: "Successful",
                results: results
            }))
    } )

}


module.exports = {
    getAllBooks,
    getBookById
}