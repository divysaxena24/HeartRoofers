const mongoose = require('mongoose');
const review = require('./review');
const { type } = require('express/lib/response');
const { ref } = require('joi');
const Schema = mongoose.Schema;
const Review = require("./review")

const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    location: String,
    price: Number,
    contact: {
      phone: String,
      email: String
    },
    facilities: [String],
    roomSharingType: String,
    genderPreference: String,
    foodOptions: [String],
    availability: Number,
    rulesPolicies: [String],
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    image: {
      url: String,
      filename: String,
    },
});



listingSchema.post("findOneAndDelete", async (listing) => {
  if(listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;