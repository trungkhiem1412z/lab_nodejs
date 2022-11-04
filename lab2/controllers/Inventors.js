const inventors = [
	{ id: 1, first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
	{ id: 2, first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
	{ id: 3, first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
	{ id: 4, first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
	{ id: 5, first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
	{ id: 6, first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
];

class Inventors {
	index(req, res, next) {
		let list = '<h2>Danh sách nhà khoa học</h2><ul>';
		inventors.forEach((e) => {
			list += `<li><a style="text-decoration:none;color:green;" href="/inventors/${e.id}">${e.last}</a></li>`;
		});
		list += '</ul></h2>';
		res.send(list);
	}
	details(req, res, next) {
		let id = req.params.id;
		const inventor = inventors.find((e) => e.id == id);
		const firstName = inventor.first.toUpperCase();
		const lastName = inventor.last.toUpperCase();
		const info = `<h2>Thông tin chi tiết nhà khoa học:Full name: ${firstName} ${lastName}, Year: ${inventor.year}, Passed: ${inventor.passed}</h2>`;
		res.send(info);
	}
	addInventor(req, res, next) {
		let newInventor = req.body;
		newInventor.id = inventors.length + 1;
		inventors.push(newInventor);
		res.redirect('/inventors');
	}
}

module.exports = new Inventors();
