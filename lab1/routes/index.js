const prodRouter = require('./product');
const addproduct = require('./addproduct');
const siteRouter = require('./site');
const inventors = require('./inventors');
const addinventor = require('./addinventor');
function route(app) {
	// Route
	app.use('/addinventor', addinventor);
	app.use('/inventors', inventors);
	app.use('/addproduct', addproduct);
	app.use('/product', prodRouter);
	app.use('/', siteRouter);
}

module.exports = route;
