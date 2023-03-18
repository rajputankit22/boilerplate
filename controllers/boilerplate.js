'use strict';

//load required modules
const msg = require('../utils/lang/messages');
const logger = new require('../utils/log');

//api for health checkup
exports.health = async (req, res) => {
	/* 
	#swagger.tags = ['Health']
	#swagger.summary = 'This is the health API.'
	#swagger.description = 'This API response tells us service is up or down.'
	#swagger.consumes = ['application/json']
	#swagger.produces = ['application/json']
	#swagger.responses[200] = {
		description: 'Service is',
		schema: { $ref: '#/definitions/helathResponse' }
	}
	#swagger.responses[500] = {
		description: 'Server Issue',
		schema: { $ref: '#/definitions/errorResponse.500' }
	}
	#swagger.responses[404] = {
		description: 'Not found',
		schema: { $ref: '#/definitions/errorResponse.404' }
	}
	 */
	logger.info(__file, __func, __line, 'Service Healthy');
	res.send({
		code: msg.response.CAG001.code,
		message: msg.response.CAG001.message,
	});
}