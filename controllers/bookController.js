const DB = require("./../database/dbConfig")
const query = require("./../services/queries")
const response = require("./../services/response")

const getBooks = async (req, res, next) => {
    
    try{
        const books = await DB.query(query.getBooks)
    
        response.success(res, 200, books.rows)
    }catch(err){
        console.log(err)
        response.failed(res, 400, err.message)
    }
}

const createBook = async(req, res, next) => {
    const { name, author, genre, price} = req.body;
    try{
        const book = await DB.query(query.confirmBook, [name])
        console.log(book.rows)
        if(book.rows.length) return response.failed(res, 400, "Book has been created")
        
        const data = await DB.query(query.createBooks, [name, author, genre, price])

        // const data = await DB.query(query.createBooks, [name, author, genre, price])

        response.success(res, 200, data.rows)
    }catch(err){
        console.log(err)
    }
}

const getABook = async (req, res, next) => {
    const id = req.params.id
    try{
        const query = "SELECT * FROM book WHERE ID = $1;"
        const data = await DB.query(query, [id])
        console.log(data.rows)
        if(data.rows.length) return response.failed(res, 404, "Data with given ID not found")

        response.success(res, 200, data.rows[0])
    }catch(err){
        console.log(err)
        response.failed(res, 500, "An Error occured")
    }
}

const updateBook = async (req, res, next) => {
    const { name, author, genre, price} = req.body
    const id = req.params.id
    try{
        const confirmId = await DB.query(query.confirmBookId, [id])
        console.log(confirmId.rows.length)
        if(!confirmId.rows.length) return response.failed(res, 404, "Data with given ID not found")

        const data = await DB.query(query.updateBook, [name, author, genre, price, id])

        response.success(res, 200, data.rows[0])
    }catch(err){
        console.log(err)
        response.failed(res, 500, "An Error occured")
    }
}

const deleteBook = async (req, res, next) => {
    const id = req.params.id
    try{
        const query = "DELETE FROM book WHERE ID = $1;"
        await DB.query(query, [id])

        response.success(res, 200, "")
    }catch(err){
        console.log(err)
        response.failed(res, 500, "An Error occured")
    }
}

module.exports = {
    getBooks,
    createBook,
    getABook,
    updateBook,
    deleteBook
}