'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

require('dotenv').config({ path: './.env' });

const PORT = process.env.EXPRESS_CONTAINER_PORT;

app.get('/', (req, res) => {
    res.send('smoke test');
});

app.listen(PORT, () => {
    console.log(`Express app is running on port ${PORT}.`);
});