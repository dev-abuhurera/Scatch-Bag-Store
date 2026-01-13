const jwt = require("jsonwebtoken");
const ownerModel = require("../models/owners-model");

module.exports = async (req, res, next) => {

    if(!req.cookies.ownerToken){
        req.flash("error", "You need to login as admin first");
        return res.redirect("/owners/login");
    }

    try{
        let decoded = jwt.verify(req.cookies.ownerToken, process.env.JWT_KEY);
        let owner = await ownerModel.findOne({email: decoded.email});

        if(!owner){
            req.flash("error", "Owner not found");
            return res.redirect("/owners/login");
        }

        req.owner = owner;
        next();
    }catch(err){
        req.flash("error", "You need to login as admin first");
        return res.redirect("/owners/login");
    }

};