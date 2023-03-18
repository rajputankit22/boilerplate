// Load required modules
const express = require('express');
const cloudAgent = require('../controllers/boilerplate');

// Default settings
const router = express.Router();

// Routes list for boilerplate
router.get('/health', cloudAgent.health);

module.exports = router;