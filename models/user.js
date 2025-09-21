const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

// here we will only define email in user schema as passport local mongoose will automatically define a username and password field for us

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    }
});

userSchema.plugin(passportLocalMongoose); 
// this will add username and password fields to the user schema and also add some methods to the user schema like register, authenticate, etc.

module.exports = mongoose.model("User", userSchema);