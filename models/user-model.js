const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

  fullname: String,
  email: String,
  password: String,
  isAdmin: {
    type: Boolean,
    default: false // regular users by default
  },
  cart: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    },
  ],
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "order",
    },
  ],

  contact: Number, // we will add this later
  picture: String, // will add this later

});

module.exports = mongoose.model("user", userSchema);
