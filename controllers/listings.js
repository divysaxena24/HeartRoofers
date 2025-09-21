const express = require("express");
const router = express.Router();
const Listing = require('../models/listing.js');
const wrapAsync = require('../utils/wrapAsync.js'); // Custom utility to handle async errors
const ExpressError = require('../utils/ExpressError.js'); // Custom utility to handle async errors
const {listingSchema} = require('../schema.js'); // Importing the Joi schema for validation
const { isLoggedIn, isOwner, validateListing } = require('../middleware.js'); // Middleware to check if user is logged in
const listingController = require("../controllers/listings.js");
const Review = require("../models/review.js");




module.exports.index = async (req, res) => {
   const allListing = await Listing.find({});
   res.render('listings/index', {allListing});
};

module.exports.postCreateRoute = async (req, res, next) => {
    let url = req.file.path;
    let filename = req.file.filename; 
    const newListing = new Listing(req.body); // because req.body contains the data from the form

    newListing.owner = req.user.id;
    newListing.image = {url, filename}



    await newListing.save();
    req.flash('success', 'New property added successfully!'); // Flash message for success
    res.redirect('/listings'); // redirecting to the listings page after saving the new listing   
}


module.exports.getEditRoute = async (req, res) => {
    let { id } = req.params; // let ID = req.params.id; 
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash('error', 'Property not found!'); // Flash message for error
        return res.redirect('/listings'); // Redirect to listings page if listing not found
    }
    res.render('listings/edit', { listing });
}


module.exports.putSearchRoute = async (req, res) => {
    const { id } = req.params;

    // Create a new object with only the allowed fields
    const allowedFields = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        location: req.body.location,
        contact: req.body.contact, // This will be an object {phone, email}
        roomSharingType: req.body.roomSharingType,
        genderPreference: req.body.genderPreference,
        availability: req.body.availability,
        // Process array fields directly during assignment
        facilities: req.body.facilities,
        foodOptions: req.body.foodOptions,
        rulesPolicies: req.body.rulesPolicies,
    };

    let updatedListing = await Listing.findByIdAndUpdate(id, allowedFields, { new: true, runValidators: true });

    if (!updatedListing) {
        req.flash('error', 'Property not found!');
        return res.redirect('/listings');
    }

    // to check if req.file exists or not
    if(typeof req.file != "undefined"){
        let url = req.file.path;
        let filename = req.file.filename; 

        updatedListing.image = {url, filename}
        await updatedListing.save();
    }


    req.flash('success', 'Property updated successfully!');
    res.redirect(`/listings/${updatedListing._id}`);
}


module.exports.deleteRoute = async (req, res) => {
    let { id } = req.params;
    const deletedListing = await Listing.findByIdAndDelete(id);

    if (!deletedListing) {
        req.flash('error', 'Property not found!'); // Flash message for error
        return res.redirect('/listings'); // Redirect to listings page if listing not found
    }

    req.flash('success', 'Property Deleted successfully!'); // Flash message for success
    res.redirect('/listings'); // Redirecting to the listings page after deleting
}


module.exports.showRoute = async (req, res) => {
    let { id } = req.params; // let ID = req.params.id;
    const listing = await Listing.findById(id).populate({path: "reviews", populate:{path: "author"}}).populate("owner");
    // this will give info of all owners and reviews
    if (!listing) {
        req.flash('error', 'Property not found!'); // Flash message for error
        return res.redirect('/listings'); // Redirect to listings page if listing not found
    }
    console.log(listing);
    const reviews = listing.reviews;
    res.render('listings/show', { listing, reviews, currentUser: req.user });
}

module.exports.search = async (req, res) => {
    const { q } = req.query; // Get the search query from req.query.q
    const searchRegex = new RegExp(q, 'i'); // Case-insensitive regex search

    const allListing = await Listing.find({
        $or: [
            { title: searchRegex },
            { location: searchRegex },
            { country: searchRegex }
        ]
    });

    res.render('listings/index', { allListing, q });
};