const express = require('express');
const router = express.Router();

const addProduct = require('../controllers/AddProduct');

router.get('/', addProduct.index);

module.exports = router;
