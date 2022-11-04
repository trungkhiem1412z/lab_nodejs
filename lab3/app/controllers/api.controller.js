const Book = require('../models/api.model');

exports.category = (req, res) => {
	Book.get_category((data) => {
		res.send({ result: data });
	});
};
