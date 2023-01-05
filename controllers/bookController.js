const DB = require("./../database/dbConfig")

const getBooks = async (req, res, next) => {
    const query = "SELECT * FROM book;"
    try{
        const books = await DB.query(query)
    
        res.status(200).json({
            status: "Success",
            books: books.rows
            
        })

    }catch(err){
        console.log(err)
    }
}

const createBook = async(req, res, next) => {
    const { name, author, genre, price} = req.body;
    try{
        const query = "INSERT INTO book(name, author, genre, price) VALUES($1, $2, $3, $4) RETURNING *;"
        const data = DB.query(query, [name, author, genre, price])

        res.status(200).json({
            status: "Success",
            data: data.rows
        })
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
        if(data.rows == []) return res.status(404).json({ status: "Failed", data: "Not found"})

        res.status(200).json({
            status: "Success",
            data: data.rows[0]
        })
    }catch(err){
        console.log(err)
    }
}

const updateBook = async (req, res, next) => {
    const { name, author, genre, price} = req.body
    const id = req.params.id
    try{
        const query = "UPDATE book SET name = $1, author = $2, genre = $3, price = $4 WHERE ID = $5;"
        const data = await DB.query(query, [name, author, genre, price, id])
        console.log(data.rows)
        if(data.rows == []) return res.status(404).json({ status: "Failed", data: "Not found"})

        res.status(200).json({
            status: "Success",
            data: data
        })
    }catch(err){
        console.log(err)
    }
}

const deleteBook = async (req, res, next) => {
    const id = req.params.id
    try{
        const query = "DELETE FROM book WHERE ID = $1;"

        await DB.query(query, [id])
        res.status(204).json({
            status: "Success"
        })
    }catch(err){
        console.log(err)
    }
}

module.exports = {
    getBooks,
    createBook,
    getABook,
    updateBook,
    deleteBook
}