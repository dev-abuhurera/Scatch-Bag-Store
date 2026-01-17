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

  contact: String, // we will add this later
  picture: {

    type: String,
    default: ""

  }, // will add this later

  address: {

    street: { type: String , default: "" },
    city: { type: String, default: "" },
    state: { type: String, default: "" },
    country: { type: String, default: "" }

  }

});

module.exports = mongoose.model("user", userSchema);
