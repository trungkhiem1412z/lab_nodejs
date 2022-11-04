const express = require('express');
const router = express.Router();

// Gọi Controller Site
const siteController = require('../controllers/SiteController');

router.get('/search', siteController.search);
router.get('/', siteController.index);

module.exports = router;
