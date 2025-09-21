const express = require("express");
const router = express.Router();
const Listing = require('../models/listing.js');
const wrapAsync = require('../utils/wrapAsync.js'); // Custom utility to handle async errors
const ExpressError = require('../utils/ExpressError.js'); // Custom utility to handle async errors
const {listingSchema} = require('../schema.js'); // Importing the Joi schema for validation
const { isLoggedIn, isOwner, validateListing, processArrayFields } = require('../middleware.js'); // Middleware to check if user is logged in
const listingController = require("../controllers/listings.js");
const multer  = require('multer');
const res = require("express/lib/response.js");
const {storage} = require('../cloudConfig.js')
const upload = multer({ storage });
// to save form data in storage

router.get('/', wrapAsync(listingController.index));

//New Route
router.get("/new",isLoggedIn ,(req, res) => {
    res.render("listings/new");
});

router.get("/search", wrapAsync(listingController.search));

router.get("/filter", wrapAsync(listingController.filter));

router.get("/privacy", (req, res) => {
    res.render("listings/privacy");
});

router.get("/terms", (req, res) => {
    res.render("listings/terms");
});

// show route
router.get('/:id', wrapAsync(listingController.showRoute));

// create route
router.post('/',upload.single('image'),isLoggedIn ,processArrayFields, validateListing, wrapAsync(listingController.postCreateRoute));

// edit route 
router.get('/:id/edit', wrapAsync(listingController.getEditRoute));


// search route
router.put('/:id', isLoggedIn, upload.single('image'), processArrayFields, validateListing, isOwner, wrapAsync(listingController.putSearchRoute));


// delete route
router.delete('/:id',isOwner, wrapAsync(listingController.deleteRoute));

module.exports = router;