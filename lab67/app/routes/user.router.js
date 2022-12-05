const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('user', { title: 'Tài Khoản' });
});

module.exports = router;
