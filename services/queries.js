module.exports = {
    getBooks: "SELECT * FROM book;",
    createBooks: "INSERT INTO book(name, author, genre, price) VALUES($1, $2, $3, $4) RETURNING *;",
    confirmBook: "SELECT * FROM book WHERE name = $1;",
    confirmBookId: "SELECT * FROM book WHERE id = $1;",
    updateBook: "UPDATE book SET name = COALESCE($1, name), author = COALESCE($2, author), genre = COALESCE($3, genre), price = COALESCE($4, price) WHERE ID = $5 RETURNING *;"
}