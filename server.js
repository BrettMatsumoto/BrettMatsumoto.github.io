'use strict';

const knex = require('knex');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const blog = require('./routes/blog');

require('dotenv').config({ path: './.env' });

const PORT = process.env.EXPRESS_CONTAINER_PORT;

app.get('/', (req, res) => {
    res.send('smoke test');
});

app.use('/blog', blog);

app.listen(PORT, () => {
    console.log(`Express app is running on port ${PORT}.`);
});