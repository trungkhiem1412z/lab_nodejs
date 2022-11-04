const express = require('express');
const router = express.Router();

const addInventor = require('../controllers/AddInventor');

router.get('/', addInventor.index);

module.exports = router;
