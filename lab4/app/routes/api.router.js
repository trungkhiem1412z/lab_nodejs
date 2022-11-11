const express = require('express');
const router = express.Router();
const Book = require('../models/api.model');
const multer = require('multer');

const upload = multer({ dest: '../../public/images' });

// Admin
// Lấy name truyền vào
router.post('/addbook', upload.single('urlHinh'), (req, res) => {
	const data = req.body;
	Book.add_book(data, (response) => {
		res.send({ result: data });
	});
});

// Client
router.get('/category/:cateId', (req, res) => {
	Book.get_category_id(req.params.cateId, (data) => {
		res.send({ result: data });
	});
});

router.get('/category', (req, res) => {
	Book.get_category((data) => {
		res.send({ result: data });
	});
});

router.get('/book', (req, res) => {
	Book.get_all_book((data) => {
		res.send({ result: data });
	});
});

module.exports = router;
