const apiApp = require('./api.router');
const siteRouter = require('./site.router');
const cat = require('./cat.router');
const devTest = require('./dev.router');

let initwebRoutes = (app) => {
	app.use('/api', apiApp);
	app.use('/dev', devTest);
	// app.use('/cat', cat);
	app.use('/', siteRouter);
	app.use(function (req, res, next) {
		res.status(404);
		res.format({
			html: function () {
				res.render('404', { url: req.url });
			},
			json: function () {
				res.json({ error: 'Not found' });
			},
			default: function () {
				res.type('txt').send('Not found');
			},
		});
	});
};
module.exports = initwebRoutes;
