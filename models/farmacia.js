const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const farmacia = new Schema ({
    name: {
        type: String,
        required: true,
    },
    laboratory: {
        type: String,
        required: true
    },
    form: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    freeSale: {
        type: Boolean,
        required: true
    }
})

const Farmacia = mongoose.model('Farmacia', farmacia);

module.exports = {Farmacia}