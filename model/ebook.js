const mongoose = require('mongoose');

//ebook schema
const BookSchema = mongoose.Schema({
    
    author:{
        type: String,
        required: true
    },
    image: String,
    description: String,
    keywords: String,
    origin: String,
    isbd: String,
	co_authors: String,
	date: {type: String, default: new Date()},
	comments: [{text: String}]
});

const Book= mongoose.model('Book', BookSchema);

module.exports = Book;