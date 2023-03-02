const {Farmacia} = require('../models/farmacia');

module.exports = {
    async crear (req, res) {
        try {
            const item = new Farmacia(req.body);
            await item.save();
            res.status(201).json(item)
        } catch (error) {
            res.status(401).json(error)
        }
    }
}