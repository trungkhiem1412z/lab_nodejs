const { response } = require('express');
const { result } = require('lodash');
const Book = require('../models/api.model');

// Lấy loại sản phẩm
exports.category = (req, res) => {
	Book.get_category((data) => {
		res.send({ result: data });
	});
};

// Lấy sản phẩm theo loại
exports.category_id = (req, res) => {
	Book.get_category_id(req.params.cateId, (data) => {
		res.send({ result: data });
	});
};

// Lấy all sản phẩm
exports.getAllBook = (req, res) => {
	Book.get_all_book((data) => {
		res.send({ result: data });
	});
};

// Thêm sản phẩm
exports.addBook = (req, res) => {
	const data = req.body;
	Book.add_book(data, (response) => {
		res.send({ result: data });
	});
};
