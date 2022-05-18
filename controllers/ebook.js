//import model folder
const Book =  require('../model/ebook');

//Get all books
const getAllBooks= (req, res, next) =>{
    res.json({message: "Get all books"});
};

//Post a new book
const postNewBook = 

//Submits a new post to DB

async (req, res) =>{
//create new syllabus object to write post to database
const Book = new Book({
    //parse the object
    author:req.body.author,
    image: req.body.image,
    description: req.body.description,
    keywords: req.body.keywords,
    origin: req.body.origin,
    isbd: req.body.isbd,
	co_authors: req.body.co_authors,
	date: req.body.date,
	comments: req.body.comments
});

try {
    const saveBook = await Book.save();          //save to DB
    res.json(saveBook);                              //try take data and respond to screen with status 200 and data in json
}
catch(err) {
    //if no data, display error msg
    res.json({message: err});
}
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