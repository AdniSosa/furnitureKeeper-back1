const mongoose = require('mongoose');

const FurnituresSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    store: {
        type: String,
        require: true
    },
    url: {
        type: String
    },
    room: {
        type: String,
        enum: ['Cocina', 'Dormitorio', 'Salón', 'Comedor', 'Recibidor', 'Baño', 'Otro'],
        require: true
    },
    size: {
        width: {
            type: Number
        },
        height: {
            type: Number
        },
        depth: {
            type: Number
        }
    }, 
    favorite : {
        type: Boolean
    },
    commennt : {
        type: String
    }
}, { timestamps: true })

const Furniture = mongoose.model('Furniture', FurnituresSchema);

module.exports = Furniture;