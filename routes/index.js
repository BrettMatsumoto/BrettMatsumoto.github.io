'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../database');

router.get('/', (req, res) => {
    res.render('home.hbs')
})

module.exports = router;