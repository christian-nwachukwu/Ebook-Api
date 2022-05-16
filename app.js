const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv/config');
const router = require('./routes/ebook');
const app = express();



//To use the routes middleware
app.use('/', router);
//app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//setting environmental variables
const port = process.env.port || 5000;

//create first route
app.get('/', (req, res) =>{
    res.send("Ebook API");
})


app.listen(port, console.log(`Server listening on http://localhost:${port}...Type Ctrl C to exit`));