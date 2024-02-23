const express = require("express");
const router = express.Router();
const Book = require("../models/book");

const {getAllBooks, createBook, getById, updateBook, deleteBook} = require("../controllers/bookController");

// Implement RESTful routes for the following operations:
// GET /books: Retrieve a list of all books.
// GET /books/:id: Retrieve a specific book by its ID.
// POST /books: Create a new book.
// PUT /books/:id: Update an existing book.
// DELETE /books/:id: Delete a book by its ID.

router.get("/", getAllBooks);
router.post("/", createBook);
router.get("/:id", getById);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);


module.exports = router ; 