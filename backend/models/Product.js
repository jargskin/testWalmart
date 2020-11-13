const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    "id": {
        type: Number,
        required: true,
        trim: true,
        unique: true
    },
    "brand": {
        type: String,
        required: true,
        trim: true
    },
    "description": {
        type: String,
        required: true,
        trim: true
    },
    "image": {
        type: String,
        required: true,
        trim: true
    },
    "price": {
        type: Number,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('Product', ProductSchema);