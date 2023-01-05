const router = require("express").Router()
const { getBooks, createBook, getABook, updateBook, deleteBook } = require("./../controllers/bookController")

router.get("/", getBooks)

router.get("/:id", getABook)

router.post("/", createBook)

router.patch("/:id", updateBook)

router.delete("/:id", deleteBook)

module.exports = router