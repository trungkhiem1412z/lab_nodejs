const db = require('../config/connectDB');

// Lấy loại sản phẩm
const get_category = (result) => {
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
const get_all_book = (result) => {
	let sql = `SELECT * FROM sach`;
	return db.query(sql, (err, book) => {
		if (!err) {
			result(book);
		} else {
			console.log(err);
		}
	});
};

// Lấy sản phẩm theo loại
const get_category_id = (cateId, result) => {
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
const add_book = (newData, urlImages, result) => {
	let sql = `INSERT INTO sach (tenSach, moTa, urlHinh, gia, idLoai, anHien) VALUES (?, ?, ?, ?, ?, ?)`;
	const datas = [newData.tenSach, newData.moTa, urlImages, newData.gia, newData.idLoai, newData.anHien];
	db.query(sql, datas, (err) => {
		if (!err) {
			result({ ...newData });
			console.log('Thêm thành công!');
		} else {
			result(err, null);
			console.log('Thêm thất bại!');
			return;
		}
	});
};

module.exports = { get_category, get_all_book, get_category_id, add_book };
