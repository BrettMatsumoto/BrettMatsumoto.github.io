'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../database');

router
    .get('/', (req, res) => {
        res.render('/index.html');
    });

module.exports = router;