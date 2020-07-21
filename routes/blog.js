'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../database')

router.get('/', (req, res) => {
    return res.render('./templates/blog.hbs');
});

module.exports = router;