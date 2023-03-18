'use strict';

// Load required modules
require('dotenv').config();
const msg = require('../utils/lang/messages');
const logger = require('../utils/log');
const { v4: uuidv4 } = require('uuid');

/**
 * @param  {object} req
 * @param  {object} res
 * @param  {function} next
 */
module.exports = (req, res, next) => {
    try {
        req.retry_attempts = req.headers.retry_attempts;
        req.request_id = uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
        next();
    } catch {
    	logger.error(__filename, __func, __line, 'Error while generating request id');
        res.send({
            code: msg.response.CAGE003.code,
            message: msg.response.CAGE003.message,
        });
    }
};