const express = require('express')
const router = express.Router();
const Book = require("../models/bookModel");

// Get all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    return res.status(200).send({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(404).send({ message: error.message });
  }
});
// Get one book from database by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findOne({ _id: id });
    return res.status(200).send(book);
  } catch (error) {
    console.log(error.message);
    return res.status(404).send({ message: error.message });
  }
});
// Create a new book in DB
router.post("/", async (req, res) => {
  try {
    if (
      !req.body.title ||
      !req.body.author ||
      !req.body.publishYear ||
      !req.body.isbn
    ) {
      return res.status(400).send({
        message:
          "Send all required fileds: title, author, publish year and isbn.",
      });
    }
    const book = await Book.create({
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
      isbn: req.body.isbn,
    });
    return res.status(200).send(book);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
});
// Update a book by its id
router.put("/:id", async (req, res) => {
  try {
    if (
      !req.body.title ||
      !req.body.author ||
      !req.body.publishYear ||
      !req.body.isbn
    ) {
      return res.status(400).send({
        message:
          "Send all required fileds: title, author, publish year and isbn.",
      });
    }
    const { id } = req.params;
    try {
      const result = await Book.findByIdAndUpdate(id, req.body);
    } catch (error) {
      // if id is wrong/book not found by id
      return res.status(404).send({ message: "Book not found" });
    }
    return res.status(200).send({ message: "Book updated successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
});
// Delete a book by its ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    try {
      const result = await Book.findByIdAndDelete(id, req.body);
    } catch (error) {
      // if id is wrong/book not found by id
      return res.status(404).send({ message: "Book not found" });
    }
    return res.status(200).send({ message: "Book deleted successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
});

module.exports = router;