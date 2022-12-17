const Pool = require("./../database/dbConfig")

class Book {
    constructor(name, author, genre, price){
        this.name = name
        this.author = author
        this.genre = genre
        this.price = price
    }

    
}

module.exports = Book