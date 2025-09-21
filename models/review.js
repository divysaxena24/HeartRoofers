const { type } = require("express/lib/response");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    comment: String,

    rating : {
        type: Number,
        min: 1,
        max: 5,
    },

    createdAt:{
        type: Date,
        default: Date.now(),
    },
    author:{
        type: Schema.Types.ObjectId, // to refer to the user who created the review
        ref: "User", // reference to User model
    },
})


module.exports = mongoose.model("Review", reviewSchema);




