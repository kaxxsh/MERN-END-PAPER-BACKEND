import asyncWrapper from "../middleware/asyncWrapper.js";
import Book from "../models/Book.js"

const getBooks = asyncWrapper(async (req, res) => {
  const books = await Book.find({});
  res.status(200).json({ books });
});

const addBook = asyncWrapper(async (req, res) => {
  const book = await Book.create(req.body);
  res.status(201).json({ book });
});


export { getBooks, addBook };