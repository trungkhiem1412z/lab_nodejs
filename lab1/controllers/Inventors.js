const inventors = [
	{ id: 1, first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
	{ id: 2, first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
	{ id: 3, first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
	{ id: 4, first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
	{ id: 5, first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
	{ id: 6, first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
];

exports.index = (req, res) => {
	res.render('inventors', { title: 'Inventor', items: inventors });
};

exports.addInventor = (req, res) => {
	let newInventor = req.body;
	newInventor.id = inventors.length + 1;
	inventors.push(newInventor);
	res.redirect('/inventors');
};

exports.details = (req, res) => {
	let id = req.params.id;
	const inventor = inventors.find((e) => e.id == id);
	const firstName = inventor.first.toUpperCase();
	const lastName = inventor.last.toUpperCase();
	const info = `<h2>Thông tin chi tiết nhà khoa học:Full name: ${firstName} ${lastName}, Year: ${inventor.year}, Passed: ${inventor.passed}</h2>`;
	res.send(info);
};
