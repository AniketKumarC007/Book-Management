const express = require("express");
const router = express.Router();
const Book = require("../models/book");

const {getAllBooks, createBook, getById, updateBook, deleteBook} = require("../controllers/bookController");
const {validateTitle , validateISBN, validateAuthor, validateDesc, validatePrice} = require("../controllers/middleware");
// Implement RESTful routes for the following operations:
// GET /books: Retrieve a list of all books.
// GET /books/:id: Retrieve a specific book by its ID.
// POST /books: Create a new book.
// PUT /books/:id: Update an existing book.
// DELETE /books/:id: Delete a book by its ID.

router.get("/", getAllBooks);
router.post("/",validateTitle,validateAuthor, validateISBN,validateDesc, validatePrice, createBook);
router.get("/:id", getById);
router.put("/:id",validateTitle,validateAuthor,validateISBN, validateDesc, validatePrice, updateBook);
router.delete("/:id", deleteBook);


module.exports = router ; 