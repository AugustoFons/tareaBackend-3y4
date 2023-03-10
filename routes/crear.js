const express = require('express');
const crearController = require('../controllers/crearController');
const router = express.Router();
const {check} = require('express-validator')    //ver {body} en documentacion de express-validator

router.post('/', [
    check('name').not().isEmpty().withMessage('El campo name es obligatorio para edicion').isLength({min: 3, max: 24}).withMessage('Este campo debe tener entre 3 y 24 caracteres'),  //pregunta si el atributo viaja y si viaja vacio
    check('price').not().isEmpty().withMessage('El campo price es obligatorio'),
    check('stock').not().isEmpty().withMessage('El campo stock es obligatorio'),
], crearController.crear)

module.exports = router