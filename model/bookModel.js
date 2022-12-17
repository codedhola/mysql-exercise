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

    static async findAll(){
        let sql = `SELECT * FROM books`
        const [book] = await Pool.execute(sql)
        return book
    }

    static async findById(id){
        let sql = `SELECT * FROM books WHERE id = ${id}`
        const [book] = await Pool.execute(sql)
        return book[0]
    }

    static async EditBook(id, data){
        let sql = `UPDATE books SET ? WHERE id = ${id}`
        const [book] = await Pool.query(sql, [data])
        return book
    }

    static async deleteBook(id){
        let sql = `DELETE FROM books WHERE id = ${id}`
        const [book] = await Pool.execute(sql)
        return book
    }


}

module.exports = Book