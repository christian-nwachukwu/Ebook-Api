const express = require('express');

const router = express.Router();

const ebookController = require('../controllers/ebook');

//Get all books
router.get('/ebook', ebookController.getAllBooks);

//Post a new book
router.post('/ebook', ebookController.postNewBook);

//Get a specific book
router.get('/ebook/:bookid', ebookController.getOneBook);

//update a specific book details
router.patch('/ebook/:bookid', ebookController.updateBook);

//Post update comment of a new book details
router.post('/ebook/:bookid', ebookController.addPost);

//Delete a specific book
router.delete('/ebook/:bookid', ebookController.deleteOneBook);

//Delete all books
router.delete('/ebook', ebookController.deleteAllBooks);


//export to use in app.js
module.exports = router; 