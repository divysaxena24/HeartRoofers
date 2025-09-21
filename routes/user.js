const express = require("express");
const router = express.Router();
const User = require("../models/user"); // adjust the path based on your project structure
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const userController = require("../controllers/user");
const user = require("../models/user");




router.get("/register", (req, res) => {
    res.render("users/signup");
});

router.post("/register", wrapAsync(userController.postRegsiter));

router.get("/login", (req,res) => {
    res.render("users/login");
})

// passport.authenticate --> middleware that will authenticate the user
// if authentication fails, it will redirect to /login
// if authentication is successful, it will call the next function
// failureFlash: true --> this will flash an error message if authentication fails

router.post("/login", passport.authenticate("local",{failureRedirect:"/login", failureFlash: true}), userController.postLogin)

router.get("/logout", userController.logout);



module.exports = router;