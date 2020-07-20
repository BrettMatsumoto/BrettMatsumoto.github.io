'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../database')

router
    .get('/', (req, res) => {
        knex.raw('SELECT * FROM blog')
            .then((result) => {
                res.send(result.rows);
            })
    });

module.exports = router;