const express = require('express');
const router = express.Router();

const prodController = require('../controllers/ProdController');

router.get('/detail', prodController.detailsProduct).post('/detail', prodController.detailsProduct);
// router.post('/', prodController.index);
router.get('/', prodController.index);

module.exports = router;
