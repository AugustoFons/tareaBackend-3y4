const express = require('express');
const router = express.Router();
const editarController = require('../controllers/editarController');
const validarId = require('../middleware/validarId')
const {check} = require('express-validator')  

router.put('/:id', validarId, [
    check('name').not().isEmpty().withMessage('El campo name es obligatorio para edicion').isLength({min: 3, max: 24}).withMessage('Este campo debe tener entre 3 y 24 caracteres'),  //pregunta si el atributo viaja y si viaja vacio
    check('price').not().isEmpty().withMessage('El campo price es obligatorio'),
    check('stock').not().isEmpty().withMessage('El campo stock es obligatorio'),
], editarController.editar)

module.exports = router;