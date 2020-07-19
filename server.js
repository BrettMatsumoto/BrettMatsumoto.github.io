'use strict';

const knex = require('knex');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const blogRoute = require('./routes/blog');
const indexRoute = require('./routes/index');

require('dotenv').config({ path: './.env' });

const PORT = process.env.EXPRESS_CONTAINER_PORT;

app.use('/', indexRoute)
app.use('/blog', blogRoute);

app.listen(PORT, () => {
    console.log(`Express app is running on port ${PORT}.`);
});