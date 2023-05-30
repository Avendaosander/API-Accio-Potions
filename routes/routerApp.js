const express = require('express');
const { dashboard } = require('../controllers/appController');
const router = express.Router()

// Dashboard Principal
router.get('/dashboard', dashboard)

module.exports = router
