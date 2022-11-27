const express = require('express');
const router = express.Router();

router.get('/detail', (req, res) => {
	// const id = req.query.idBook;
	res.render('detail', { title: 'Chi tiết' });
});
router.get('/cat', (req, res) => {
	// const id = req.query.id;
	res.render('sach', { title: 'Sách' });
});
router.get('/', (req, res) => {
	res.render('sach', { title: 'Sách' });
});

module.exports = router;
