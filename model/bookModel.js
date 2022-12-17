const Pool = require("./../database/dbConfig")

class Book {
    constructor(name, author, genre, price){
        this.name = name
        this.author = author
        this.genre = genre
        this.price = price
    }

    async save(){
        let sql = `INSERT INTO books(name, author, genre, price) VALUES( 
            '${this.name}', '${this.author}',
            '${this.genre}', ${this.price}
        );`
        const [book, _] = await Pool.execute(sql)
        return book;
    }

    static findAll(){

    }

}

module.exports = Book