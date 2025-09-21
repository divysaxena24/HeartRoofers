const Listing = require('./models/listing.js');
const {listingSchema} = require('./schema.js'); // Importing the Joi schema for validation
const ExpressError = require('./utils/ExpressError.js'); // Custom utility to handle async errors
const {reviewSchema} = require("./schema.js");
const Review = require('./models/review.js');





module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl; // Store the original URL to redirect after login
        req.flash('error', 'You must be signed in first!');
        return res.redirect('/login');
    }
    next();
};


// this is done to save the redirect url in res.locals so that we can use it in the login route
module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
        delete req.session.redirectUrl; // Clear it after using
    } else {
        res.locals.redirectUrl = '/listings'; // Default redirect URL
    }   
    next();
};

module.exports.isOwner = async(req,res, next)=>{
    const { id } = req.params;

    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash('error', 'Property not found!');
        return res.redirect('/listings');
    }

    // Ensure user is logged in
    const currentUser = res.locals.currentUser;
    if (!currentUser || listing.owner.toString() !== currentUser._id.toString()) {
        req.flash('error', "You are not the owner of this");
        return res.redirect(`/listings/${listing._id}`);
    }
    next();
}


module.exports.validateListing = (req, res, next) => {
    if (req.body.originalImageFilename) {
        delete req.body.originalImageFilename;
    }
    const { error } = listingSchema.validate(req.body); // Validate the request body against the schema
    if (error) {
        let errMsg = error.details.map(detail => detail.message).join(', '); // Join all error messages
        throw new ExpressError(400, errMsg); // Custom error handling
    }else{
    next(); // Proceed to the next middleware or route handler
    }
};


module.exports.validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body); // Validate the request body against the schema
    if (error) {
        let errMsg = error.details.map(detail => detail.message).join(', '); // Join all error messages
        throw new ExpressError(400, errMsg); // Custom error handling
    }else{
    next(); // Proceed to the next middleware or route handler
    }
};


module.exports.isReviewAuthor = async(req, res, next) => {
    const { reviewId } = req.params;
    const review = await Review.findById(reviewId);
    if (!review.author.equals(req.user._id)) {
        req.flash('error', 'Unauthorized');
        return res.redirect(`/listings/${req.params.id}`);
    }
    next();
}

module.exports.processArrayFields = (req, res, next) => {
    if (req.body.facilities && typeof req.body.facilities === 'string') {
        req.body.facilities = req.body.facilities.split(',').map(item => item.trim());
    } else if (!req.body.facilities) {
        req.body.facilities = [];
    }

    if (req.body.foodOptions && typeof req.body.foodOptions === 'string') {
        req.body.foodOptions = req.body.foodOptions.split(',').map(item => item.trim());
    } else if (!req.body.foodOptions) {
        req.body.foodOptions = [];
    }

    if (req.body.rulesPolicies && typeof req.body.rulesPolicies === 'string') {
        req.body.rulesPolicies = req.body.rulesPolicies.split(',').map(item => item.trim());
    } else if (!req.body.rulesPolicies) {
        req.body.rulesPolicies = [];
    }
    next();
};