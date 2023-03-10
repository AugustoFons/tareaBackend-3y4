const express = require('express');
const borrarController = require('../controllers/borrarController');
const router = express.Router();
const validarId = require('../middleware/validarId')

router.delete('/:id', validarId, borrarController.borrar)

module.exports = router