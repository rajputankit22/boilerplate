//load required modules
require('dotenv').config();
const libExpress = require('express');
const bodyParser = require('body-parser');
const app        = libExpress();
const config     = require('./config/boilerplate');
const logger     = require('./utils/log');
const libQueue   = require('./utils/queue');
const libCache   = require('./utils/redis');
const morgan = require("morgan");


// App settings
app.use(bodyParser.json()); //used when request is sent in json
app.use(bodyParser.urlencoded({ extended: true })); //for parsing application/xwww-

// Logger for the request
app.use(morgan("dev"));


// Prefix for version 1 
const defaultRoute_v1 = '/api/v1';

// Establishing RabbitMq connection for publishing NRQ Data
// const queueObj = new libQueue();
// queueObj.createConnection(config.rabbitmq, () => {
// 	logger.info(__file, __func, __line, 'RabbitMQ publisher connected');
// });

// Establishing Redis Cache connection
// const cache = new libCache();
// cache.createConnection();
// module.exports.cache = cache;

// // Establishing Data Base connection
// const knex = require('./config/database').knex;
// const bookshelf = require('bookshelf')(knex);

// Function that allows to append data to API request
// app.all("*", function (req, resp, next) {
// 	req.queueObj = queueObj;
// 	req.cache = cache;
// 	// req.bookshelf = bookshelf;
// 	next();
// });

// Routes list
const cloudAgentRoutes    = require('./routes/boilerplate');

// Health route
app.use('', cloudAgentRoutes);

// Swagger API document is not available for production.
if (config.core.environment.toLowerCase() !== 'production') {
	const swaggerUi = require('swagger-ui-express');
	const swaggerDocument = require('./docs/swagger.json');
	app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

// Start web server and service
try{
	app.listen(config.service.port, () => {
		logger.info(__file, __func, __line, 'service is up on port ' + config.service.port);
	});
}catch(e){
	logger.error(__filename, __func, __line, 'Error in starting the boilerplate service on port ' + config.service.port);
}
