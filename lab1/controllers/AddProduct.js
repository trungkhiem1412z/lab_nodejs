class AddProduct {
	index(req, res, next) {
		res.send(
			'<form action="product" method="POST"><input type="text" name="productName"><button type="submit">Add</button></form>'
		);
	}
}

module.exports = new AddProduct();
