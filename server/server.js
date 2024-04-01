const express = require("express");
const app = express();
const PORT = 5000;
const dbconfig = require("./database");
const booksRoute = require('./routes/booksRoute')
const cors = require('cors')
app.listen(PORT, () => console.log(`Server Started @ ${PORT} `));


//Middleware to parse every req/res body into js / json
app.use(express.json());
app.use(express.urlencoded());
// Middleware for providing access to cross origin resources sharing
app.use(cors());
//middleware- Router level 
app.use('/books', booksRoute);



