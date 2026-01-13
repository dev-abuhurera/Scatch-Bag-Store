const express = require("express");
const userModel = require("../models/user-model");
const orderModel = require("../models/order-model");
const isLoggedIn = require("../middlewares/isLoggedIn");
const router = express.Router();

function calculateBill(cart) {

    let bill = 0;
  
    if (cart && cart.length > 0) {

      // Calculate bill for all items in cart
      const cartTotal = cart.reduce((total, item) => {
        return total + (Number(item.price) - Number(item.discount || 0));
      }, 0); // we are calculating the total price of the items in the cart
  
      bill = cartTotal + 20; // Add shipping or handling fee
    }
    return bill;
    
};

router.post("/placeorder", isLoggedIn, async function (req, res) {

    try{
      // Get the current user and populate the cart
    let user = await userModel.findOne({ email: req.user.email }).populate("cart");
  
    if(!user.cart || user.cart.length == 0){
      req.flash("error", "Cart is empty");
      return res.redirect("/cart");
    }
  
      let bill = calculateBill(user.cart);
  
      const orderItems = user.cart.map(item => ({ 
      // we are mapping the cart items to the order items
      product: item._id,
      name: item.name,
      price: item.price,
      discount: item.discount,
      quantity: 1,
      total: Number(item.price) - Number(item.discount || 0)
  
      }));
  
      let order = await orderModel.create({ // creating the order
  
        user: user._id,
        items: orderItems,
        totalAmount: bill,
        status: "pending",
        orderDate: new Date(),
  
      });
  
      user.orders.push(order._id); // pushing the order id to the user's orders array
      user.cart = []; // emptying the cart ---- refreshing the cart
      await user.save(); // saving the user
  
      req.flash("success", "Order placed successfully");
      res.redirect("/orders");
  
    } catch (error) {
      req.flash("error", error.message);
      return res.redirect("/cart");
    }

});


// Export router as default, and calculateBill separately
module.exports = router;
module.exports.calculateBill = calculateBill;



