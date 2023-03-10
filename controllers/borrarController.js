const {Farmacia} = require('../models/farmacia')
const {validationResult} = require('express-validator')

module.exports = {
    async borrar (req, res) {
        await Farmacia.findByIdAndDelete(req.params.id)
        res.json({message: "Borrado con exito"})
    }
}