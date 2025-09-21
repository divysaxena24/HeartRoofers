require('dotenv').config();
console.log(process.env.SECRET);
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dbUrl = process.env.ATLASDB_URL; // Update with your MongoDB URI
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const path = require('path');
const { stat } = require('fs');
const indexRouter = require("./routes/index.js");
const listingsRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js");
const sessions = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const passport = require("passport");
const User = require("./models/user.js");
const LocalStrategy = require("passport-local");
const userRouter = require("./routes/user.js");

// Connect to MongoDB
main()
    .then(() => {
        console.log("Connected to MongoDB successfully!");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
        
    });

async function main() {
    await mongoose.connect(dbUrl)
}

//setup view engine
app.engine('ejs', ejsMate); // using ejs-mate for layout support
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));    
app.use(express.urlencoded({ extended: true })); // this is done so that data can we passed from req
app.use(methodOverride('_method')); // this is done so that we can use PUT and DELETE methods in forms
app.use(express.static(path.join(__dirname, 'public'))); // this is done so that we can use static files like css, js, images, etc. and public is the folder where we will keep our static files

const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto: {
        secret: process.env.SECRET,
    },
    touchAfter: 24 * 3600 // time period in seconds
});

store.on("error", (err) => {
    console.log("Session store error", err);
});

const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 10*1000 * 60 * 60 * 24, // 10 days
        maxAge : 10*1000 * 60 * 60 * 24, // 10 days
        httpOnly: true, // this will prevent the cookie from being accessed by JavaScript in the browser
    }
    // this will create a session cookie that will expire in 10 days
}


app.use(sessions(sessionOptions));
app.use(flash()); // this is done so that we can use flash messages in our app  

// initialize passport and use sessions  
app.use(passport.initialize()); // this is done so that we can use passport for authentication
app.use(passport.session()); // this is done so that we can use sessions with passport
passport.use(new LocalStrategy(User.authenticate())); // this is done so that we can use the authenticate method of passport-local-mongoose

// serialize and deserialize user
passport.serializeUser(User.serializeUser()); // this is done so that we can serialize the user
passport.deserializeUser(User.deserializeUser()); // this is done so that we can deserialize the user

app.use((req, res, next) => {
    res.locals.success = req.flash("success") || [];
    res.locals.error = req.flash("error") || [];
    res.locals.currentUser = req.user; // this will make the user available in all the templates
    res.locals.q = req.query.q; // Make search query 'q' available globally
    res.locals.currentPath = req.path; // Make current path available globally
    next();
});

app.use("/listings/:id/reviews", reviewsRouter);
app.use("/listings", listingsRouter);
app.use("/", indexRouter);
app.use("/", userRouter);

app.use((err, req, res, next) => {
    let { status = 500, message = "Something went wrong" } = err;
    res.render("error", { status, message });

});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});