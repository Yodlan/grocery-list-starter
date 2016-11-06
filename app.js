// Create your app
const path = require('path');

const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');

// Initialize our app
const app = express();

// Set our views directory
app.use(express.static('css'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

const groceries = require('./router/groceries')

app.use('/groceries', groceries);

// Set up our server
const port = 3000;
app.listen(port, () => console.log(`Server listening on: ${port}`));
