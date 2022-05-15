const express = require('express');
require('dotenv/config');
const morgan = require('morgan');
const app = express();

port = process.env.port || 5000;

app.get('/', (req, res) =>{
    res.send("Ebook API");
})

app.listen(port, console.log(`Server listening on http://localhost:${port}...Type Ctrl C to exit`));