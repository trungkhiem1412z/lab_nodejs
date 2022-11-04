exports.index = (req, res) => {
	res.render('home', { title: 'Home' });
};

exports.search = (req, res) => {
	res.send('Search');
};
