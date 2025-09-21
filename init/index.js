const mongoose = require("mongoose");
const Listing = require("../models/listing"); 
const listings = require("./data");

main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Connection error", err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/heartroofers");
  await Listing.deleteMany({});

  
  const updatedListings = listings.map((obj) => ({
    ...obj,
    owner: "68ba69ef13ef2f5bea35e770",
  }));

  await Listing.insertMany(updatedListings);
  console.log("Data seeded successfully!");
}

module.exports = { main }; 

