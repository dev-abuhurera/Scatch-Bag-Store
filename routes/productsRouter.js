const express = require("express");
const router = express.Router();
const upload = require("../config/multer-config");
const productModel = require("../models/product-model");
const isOwnerLoggedIn = require("../middlewares/isOwner");

router.post("/create", isOwnerLoggedIn, upload.single("image"), async (req, res) => {

    try{

        let { name, price, discount, bgcolor, panelcolor, textcolor } =
          req.body;
      
        let product = await productModel.create({
          image: req.file.buffer,
          name,
          price,
          discount,
          bgcolor,
          panelcolor,
          textcolor,
        });
      
        req.flash("success", "Product created successfully");
        res.redirect("/owners/admin");
    }
    catch(err){
        res.send(err.message)
    }
    
});

// Router to delete a single product -----> 

router.post("/delete/:productId", isOwnerLoggedIn, async (req, res) => { // Product id can be changing 
  
  try{

    const { productId } = req.params;
    await productModel.findByIdAndDelete(productId); // ProductModel will find the id and delete the product of that id
    req.flash("success", "Product deleted successfully");
    res.redirect("/owners/admin");

  } catch (err){
    req.flash("error", "Failed to delete the product");
    res.redirect("/owners/admin");

  }}); 


// Router to delete all the products 

router.post("/deleteall", isOwnerLoggedIn, async (req, res) => { // delete all the products 

  try{

    await productModel.deleteMany({});
    req.flash("success", "All products deleted successfully");
    res.redirect("/owners/admin");

  }catch (err){

    req.flash("error", "Failed to delete all products");
    res.redirect("/owners/admin");

  }

});

module.exports = router;