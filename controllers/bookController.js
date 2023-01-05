const DB = require("./../database/dbConfig")

const getBooks = async (req, res, next) => {
    const query = "SELECT * FROM BOOK";
    try{
        const books = await DB.query(query)
    
        res.status(200).json({
            status: "Success",
            books: books
            
        })

    }catch(err){
        console.log(err)
    }
}

module.exports = {
    getBooks
}