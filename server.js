'use strict';

const knex = require('knex');
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('public'));
app.use(methodOveride('_method'));
app.engine('.hbs', exphbs({
    extname: '.hbs',
    partialsDir: __dirname + '/views/partials/',
    layoutsDir: __dirname + '/views/templates/'
}));
app.set('view engine', '.hbs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const blogRoute = require('./routes/blog');
const indexRoute = require('./routes/index');

require('dotenv').config({ path: './.env' });

const PORT = process.env.EXPRESS_CONTAINER_PORT;

app.use('/', indexRoute)
app.use('/blog', blogRoute);

app.listen(PORT, () => {
    console.log(`Express app is running on port ${PORT}.`);
});