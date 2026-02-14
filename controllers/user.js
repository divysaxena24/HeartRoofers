const express = require("express");
const router = express.Router();
const User = require("../models/user"); // adjust the path based on your project structure
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");


module.exports.postRegsiter = async (req, res, next) => {

    try {
        let { email, username, password } = req.body;
        let user = new User({ email, username });
        let registeredUser = await User.register(user, password);
        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "Welcome to HeartRoofers!");
            res.redirect("/");
        });
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/register");
    }
}


module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) { return next(err); }
        req.flash("success", "You Are Logged Out!");
        res.redirect("/listings");
    }
    )
}


module.exports.postLogin = async (req, res) => {
    req.flash("success", `Welcome back!`);
    res.redirect(res.locals.redirectUrl || '/listings'); // Redirect to the saved URL or default to /listings
}
