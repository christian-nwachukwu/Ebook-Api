//import model foulder
//const ebookController = require('../controllers/ebook');

//Get all books
const getAllBooks= (req, res, next) =>{
    res.json({message: "Get all books"});
};

//Post a new book
const postNewBook = (req, res, next) =>{
    res.json({message: "Post a new book"});
};

//Get a specific book
const getOneBook = (req, res, next) =>{
    res.json({message: "Get a specific book"});
};

//update a specific book details
const updateBook = (req, res, next) =>{
    res.json({message:"Update a specific book details"});
};

//Post update about a new book details
const addPost = (req, res, next) =>{
    res.json({message: "Post new book update"});
};

//Delete a specific book
const deleteOneBook = (req, res, next) =>{
    res.json({message: "Delete a specific book"});
};

//Delete all books
const deleteAllBooks = (req, res, next) =>{
    res.json({message: "Delete all books"});
};

//export controller functions
module.exports = {
    getAllBooks,
    postNewBook,
    getOneBook,
    updateBook,
    addPost,
    deleteOneBook,
    deleteAllBooks
};