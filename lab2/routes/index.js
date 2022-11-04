const siteRouter = require('./site');
const inventors = require('./inventors');
const addinventor = require('./addinventor');
const shop = require('./shop');
// const addproduct = require('./addproduct');

function route(app) {
	// Route
	// app.use('/addproduct', addproduct);
	app.use('/shop', shop);
	app.use('/addinventor', addinventor);
	app.use('/inventors', inventors);
	app.use('/', siteRouter);
}

module.exports = route;
