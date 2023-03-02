const { Router } = require('express');
const express = require('express');
const crearController = require('../controllers/crearController');
const router = express.Router();


router.post('/', crearController.crear)

module.exports = router