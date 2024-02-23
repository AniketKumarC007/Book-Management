const Book = require("../models/book");

const getAllBooks = async (req, res, next) => {
  var books;
  try {
    books = await Book.find();
  } catch (err) {
    console.log(err);
  }

  if (!books) {
    return res.status(404).json({ message: "No Books found" });
  }
  return res.status(200).json({ books });
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(404).json({ message: "No Book found" });
  }
  return res.status(200).json({ book });
};

const createBook = async (req, res, next) => {
  const { title, author,isbn, description, price, image } = req.body;
  let book;
  try {
    book = new Book({
      title,
      author,
      isbn,
      price,
      description,
      image,
    });
    await book.save();
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(500).json({ message: "Error while Creating Book" });
  }
  return res.status(201).json({ book });
};

const updateBook = async (req, res, next) => {
  const id = req.params.id;
  const { title, author, isbn, description, price, image } = req.body;
  let book;
  try {
    book = await Book.findByIdAndUpdate(id, {
        title,
        author,
        isbn,
        price,
        description,
        image,
    });
    book = await book.save();
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(404).json({ message: "Unable To Update By this ID" });
  }
  return res.status(200).json({ book });
};

const deleteBook = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    console.log("In here") ;
    book = await Book.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(404).json({ message: "Unable To Delete" });
  }
  return res.status(200).json({ message: "Book Deleted Successfully" });
};

module.exports = {
    getAllBooks,
    createBook,
    getById,
    updateBook,
    deleteBook
};