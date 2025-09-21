const express = require("express");
const router = express.Router({mergeParams: true});
const Review = require('../models/review.js');
const {reviewSchema} = require("../schema.js")
const Listing = require('../models/listing');
const wrapAsync = require('../utils/wrapAsync.js'); // Custom utility to handle async errors
const ExpressError = require('../utils/ExpressError.js'); // Custom utility to handle async errors
const {listingSchema} = require('../schema.js'); 
const {validateReview, isLoggedIn, isReviewAuthor} = require('../middleware.js')
const reviewControllers = require('../controllers/review');




router.post("/",isLoggedIn ,validateReview ,wrapAsync(reviewControllers.createReview))


router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewControllers.deleteReview));



module.exports = router;