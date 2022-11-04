const express = require('express');
const router = express.Router();

const inVentors = require('../controllers/Inventors');
router.get('/:id', inVentors.details);
router.get('/', inVentors.index).post('/', inVentors.addInventor);

module.exports = router;
