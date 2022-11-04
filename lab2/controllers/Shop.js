const formidable = require('formidable');
const fs = require('fs');

const listProduct = [
	{
		id: 0101,
		title: 'Sống Xanh Như Những Lá Trà',
		slug: 'song-xanh-nhu-nhung-la-tra',
		price: 63500,
		description: 'Khám phá kho tàng ý tưởng về sự đơn giản,  trí tuệ của người Nhật',
		imageURL: 'song-xanh-nhu-nhung-la-tra.png',
	},
	{
		id: 0102,
		title: 'Sống Như Lần Đầu, Yêu Như Lần Cuối',
		slug: 'song-nhu-lan-dau-tien-yeu-thuong-nhu-lan-cuoi',
		price: 52000,
		description: 'Những câu chuyện hằng ngày, những hạnh phúc giản dị mà chúng ta dễ bỏ lỡ',
		imageURL: 'song-nhu-lan-dau-tien-yeu-thuong-nhu-lan-cuoi.jpg',
	},
	{
		id: 0103,
		title: 'Sức Mạnh Của Sự Tử Tế',
		slug: 'suc-manh-cua-su-tu-te',
		price: 29000,
		description: 'Những câu chuyện sâu sắc và ý nghĩa về sự tử tế mỗi ngày',
		imageURL: 'suc-manh-cua-su-tu-te.png',
	},
	{
		id: 0104,
		title: 'Những Ngày Đầy Nắng',
		slug: 'nhung-ngay-day-nang',
		price: 103200,
		description:
			'Bạn thân mến! Tôi chưa bao giờ nghĩ mình sẽ viết sách. Tôi cũng chưa bao giờ tin, mình có thể làm bánh.',
		imageURL: 'nhung-ngay-day-nang.png',
	},
	{
		id: 0105,
		title: 'Để Có Một Tương Lai',
		slug: 'de-co-mot-tuong-lai',
		price: 124000,
		description:
			'Trong xã hội có rất nhiều mối nguy. Nếu chúng ta đặt một người trẻ vào xã hội mà không tìm cách bảo vệ họ, ...',
		imageURL: 'de-co-mot-tuong-lai.png',
	},
	{
		id: 0106,
		title: 'Cân Bằng Cảm Xúc, Cả Lúc Bão Giông',
		slug: 'can-bang-cam-xuc-ca-luc-bao-giong',
		price: 76800,
		description:
			'Một ngày, chúng ta có khoảng 16 tiếng tiếp xúc với con người, công việc, các nguồn thông tin từ mạng xã hội',
		imageURL: 'can-bang-cam-xuc-ca-luc-bao-giong.jpg',
	},
];

class ShopController {
	// [GET] /
	index(req, res, next) {
		res.render('shop', { title: 'Shop', products: listProduct });
	}
	addget(req, res, next) {
		res.render('addproduct', { title: 'Thêm sản phẩm' });
	}
	addpost(req, res, next) {
		const form = new formidable.IncomingForm();
		form.parse(req, function (err, fields, files) {
			let pathFile = files.hinhsp.filepath;
			let tenFile = files.hinhsp.originalFilename;
			let tensp = fields.tensp;
			let giasp = fields.giasp;
			let motasp = fields.motasp;
			let destPath = (__dirname, './lab2') + '\\public\\images\\' + tenFile;
			fs.copyFile(pathFile, destPath, (err) => {
				if (err) throw err;
				fs.unlink(pathFile, () => {
					console.log('Đã xóa file tạm');
				});
				console.log('Đã upload xong file ' + tenFile);
			});
			listProduct.push({
				id: '0114',
				title: tensp,
				price: giasp,
				description: motasp,
				imageURL: tenFile,
			});
			//res.send(JSON.stringify({ fields, files,pathFile , destPath}, null, 2));
			res.redirect('/shop');
		});
	}
	detail(req, res, next) {
		const thutu = req.params.spId;
		const sp = listProduct[thutu];
		res.render('detail', { title: `${sp.title}`, thutu: thutu, sp: sp });
	}
}

module.exports = new ShopController();
