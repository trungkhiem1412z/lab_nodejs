const express = require('express');
const router = express.Router();

router.get('/success', (req, res) => {
  res.render('/success', { title: 'Thành công!' });
});

router.get('/', (req, res) => {
  res.render('login', { title: 'Đăng nhập' });
});

module.exports = router;
