const {Farmacia} = require('../models/farmacia');

module.exports = {
    async ver (req, res) {
        const items = await Farmacia.find()
        res.json({items})
    }
}