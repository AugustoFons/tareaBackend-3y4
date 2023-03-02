const express = require('express');
const verController = require('../controllers/verController');
const router = express.Router();

router.get('/', verController.ver)

module.exports = router