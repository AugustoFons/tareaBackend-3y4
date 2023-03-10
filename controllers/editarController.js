const {Farmacia} = require('../models/farmacia');
const {validationResult} = require('express-validator')


module.exports = {
    async editar (req, res) {
        try {
            const err = validationResult(req);
            if (err.isEmpty()) {
                await Farmacia.findByIdAndUpdate(req.params.id, req.body)
                res.status(201).json({message: 'Producto Actualizado'})
            } else {
                res.json(err)
            }

        } catch (error) {
            res.json(error)
        }
    }
}