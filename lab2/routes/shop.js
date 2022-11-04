const express = require('express');
const router = express.Router();

const shop = require('../controllers/Shop');

router.get('/add', shop.addget);
router.post('/add', shop.addpost);
router.get('/:spId', shop.detail);
router.get('/', shop.index);

module.exports = router;
