const Joi = require("joi");
const { model } = require("mongoose");
const review = require("./models/review");

module.exports.listingSchema = Joi.object({
  title: Joi.string(),
  location: Joi.string(),
  price: Joi.string(),
  contact: Joi.object({
    phone: Joi.string(),
    email: Joi.string(),
  }),
  facilities: Joi.array().items(Joi.string()),
  roomSharingType: Joi.string(),
  genderPreference: Joi.string(),
  foodOptions: Joi.array().items(Joi.string()),
  availability: Joi.number(),
  rulesPolicies: Joi.array().items(Joi.string()),
  image: Joi.string().allow(""),
  description: Joi.string()
});

module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().required().min(1).max(5),
    comment: Joi.string().required(),
  }).required(),
});