const { check, header, validationResult, param } = require('express-validator');
const msg = require('../utils/lang/messages');

// Sample validator
module.exports.getAccountApiValidator = [
    param("account_id").not().isEmpty().withMessage("msg").isNumeric().withMessage("msg"),
]