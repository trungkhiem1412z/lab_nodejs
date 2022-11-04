class addInventor {
	index(req, res, next) {
		res.send(
			'<h1>Thêm Nhà Khoa Học</h1><form action="/inventors" method="POST"><input type="text" name="first" placeholder="input first name"><input type="text" name="last" placeholder="input last name"><br><input type="number" name="year" placeholder="Year"><input type="number" name="passed" placeholder="passed"><br><button type="submit">Add Inventor</button></form>'
		);
	}
}

module.exports = new addInventor();
