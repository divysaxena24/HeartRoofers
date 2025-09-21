const Review = require("../models/review");
const express = require("express");
const router = express.Router({mergeParams: true});
const {reviewSchema} = require('../schema.js')
const Listing = require('../models/listing');
const wrapAsync = require('../utils/wrapAsync.js'); // Custom utility to handle async errors
const ExpressError = require('../utils/ExpressError.js'); // Custom utility to handle async errors
const {listingSchema} = require('../schema.js'); 
const {validateReview, isLoggedIn, isReviewAuthor} = require('../middleware.js')



module.exports.createReview = async(req,res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    let {id} = req.params;
    newReview.author = req.user._id; // Associate the review with the logged-in user
 

    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();
    req.flash('success', 'Review added successfully!'); // Flash message for success
     // Flash message for success

    res.redirect(`/listings/${id}`);
}

module.exports.deleteReview = async (req, res, next) => {
  console.log('deleteReview called, Review:', Review);
  console.log('deleteReview called, Review:', Review);
  try {
    const { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash('success', 'Review deleted successfully!');
    res.redirect(`/listings/${id}`);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

