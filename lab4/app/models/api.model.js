const db = require('../config/connectDB');

const Book = (book) => {
	this.id = cat.id;
	this.tenLoai = cat.tenLoai;
	this.thuTu = cat.thuTu;
	this.anHien = cat.anHien;
	this.tenSach = this.tenSach;
};

// Lấy loại sản phẩm
Book.get_category = (result) => {
	let sql = 'SELECT id, tenLoai from loai';
	db.query(sql, (err, book_cat) => {
		if (!err) {
			result(book_cat);
		} else {
			console.log(err);
		}
	});
};

// Lấy tất cả sản phẩm
Book.get_all_book = (result) => {
	let sql = `SELECT * FROM sach`;
	db.query(sql, (err, book) => {
		if (!err) {
			result(book);
		} else {
			console.log(err);
		}
	});
};

// Lấy sản phẩm theo loại
Book.get_category_id = (cateId, result) => {
	let sql = `SELECT * FROM sach WHERE idLoai=${cateId}`;
	db.query(sql, (err, book) => {
		if (!err) {
			result(book);
		} else {
			console.log(err);
		}
	});
};

// Thêm sản phẩm
Book.add_book = (newData, result) => {
	// result(data);
	let sql = `INSERT INTO sach SET ?`;
	db.query(sql, newData, (err, book) => {
		if (!err) {
			result({ id: book.insertId, ...newData });
		} else {
			result(err, null);
			return;
		}
	});
};

module.exports = Book;
