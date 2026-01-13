const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    
    items: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "product",
                required: true
            },
            name: {
                type: String
            },  
            price: {
                type: Number
            },
            discount: {
                type: Number,
                default: 0
            },
            total: {
                type: Number
            },
            quantity: {
                type: Number,
                default: 1
            }
        },
    ],
    totalAmount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "confirmed", "shipped", "delivered", "cancelled"],
        default: "pending"
    },
    orderDate: {
        type: Date,
        default: Date.now
    },

});

module.exports = mongoose.model("order", orderSchema);