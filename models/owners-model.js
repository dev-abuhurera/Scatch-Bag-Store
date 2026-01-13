const mongoose = require("mongoose");


const ownerSchema = new mongoose.Schema({

    fullname: {
        type: String,
        minLength: 3,
        trim:true,
        required: true
    },
    email: String,
    password: String,

    products: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
    },

    picture:String,
    gstin:String,

});

module.exports = mongoose.model("Owner", ownerSchema);