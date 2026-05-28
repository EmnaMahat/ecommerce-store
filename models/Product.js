const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

    storeId: {
        type: Number,
        required: true
    },

    storeName: {
        type: String,
        required: true
    },

    productId: {
        type: Number,
        required: true
    },

    productName: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    }

});

module.exports = mongoose.model("Product", productSchema);