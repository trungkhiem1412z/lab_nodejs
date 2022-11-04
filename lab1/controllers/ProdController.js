// class ProdController {
// 	// [GET] /prod
// 	index(req, res, next) {
// 		res.send('Sản phẩm');
// 	}
// 	// Show
// 	detailsProduct(req, res, next) {
// 		res.send('Sản phẩm chi tiết');
// 	}
// }

// module.exports = new ProdController();

exports.index = (req, res) => {
	res.render('product', { title: 'Sản phẩm' });
};

exports.detailsProduct = (req, res) => {
	res.render('detail', { title: 'Sản phẩm chi tiết' });
};
