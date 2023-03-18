'use strict';

// Load required modules
require('dotenv').config();
const config = require('../config/boilerplate');
const msg = require('../utils/lang/messages');
const logger = require('../utils/log');

/**
 * @param  {object} req
 * @param  {object} res
 * @param  {function} next
 */
module.exports = (req, res, next) => {
    try {
        const key = req.headers['api-key'];
        if (key != config.service.api_key) {
            logger.debug(__file, __func, __line, 'Authentication is failed');
            res.send({
                code: msg.response.CAGE001.code,
                message: msg.response.CAGE001.message,
            });
        } else {
            next();
        }
    } catch {
        res.send({
            code: msg.response.CAGE001.code,
            message: msg.response.CAGE001.message,
        });
    }
};