const siteRouter = require('./site.router');
const cat = require('./cat.router');

let initwebRoutes = (app) => {
	app.use('/cat', cat);
	app.use('/', siteRouter);
};
module.exports = initwebRoutes;
