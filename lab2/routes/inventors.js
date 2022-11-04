const express = require('express');
const router = express.Router();

const inVentors = require('../controllers/Inventors');
router.get('/:id', inVentors.details);
router.post('/', inVentors.addInventor);
router.get('/', inVentors.index);

module.exports = router;
