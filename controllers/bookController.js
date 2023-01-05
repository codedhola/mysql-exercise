const DB = require("./../database/dbConfig")

const getBooks = async (req, res, next) => {
    const query = "SELECT * FROM book";
    try{
        const books = await DB.query(query)
    
        res.status(200).json({
            status: "Success",
            books: books.rows[0]
            
        })

    }catch(err){
        console.log(err)
    }
}

const createBook = async(req, res, next) => {
    const { name, author, genre, price} = req.body;
    try{
        const query = "INSERT INTO book(name, author, genre, price) VALUES($1, $2, $3, $4) RETURNING *"
        const data = DB.query(query, [name, author, genre, price])

        res.status(200).json({
            status: "Success",
            data: data
        })
    }catch(err){
        console.log(err)
    }
}

module.exports = {
    getBooks,
    createBook
}