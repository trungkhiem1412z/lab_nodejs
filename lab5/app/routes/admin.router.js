const express = require('express');
const router = express.Router();

router.get('/category', (req, res) => {
	res.render('category', { title: 'Quản lý danh mục' });
});
router.get('/addbook', (req, res) => {
	res.render('addbook', { title: 'Thêm sản phẩm' });
});
router.get('/editbook', (req, res) => {
	res.render('editbook', { title: 'Sửa sản phẩm' });
});
router.get('/', (req, res) => {
	res.render('admin', { title: 'Admin' });
});

module.exports = router;
