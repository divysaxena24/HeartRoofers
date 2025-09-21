// insertListings.js
require('dotenv').config({ path: '../.env' });
const { MongoClient } = require("mongodb");
const sampleListings = require("./data"); // your data file

// Replace with your Atlas connection string
const uri = process.env.ATLASDB_URL;

async function insertData() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db(); // Use the default DB from the connection string
    const collection = database.collection("listings");

    // Optional: Clear existing data before inserting new data
    await collection.deleteMany({});
    console.log("Cleared existing listings.");

    // Insert all listings at once
    const result = await collection.insertMany(sampleListings);
    console.log(`${result.insertedCount} listings inserted successfully!`);
  } catch (error) {
    console.error("Error inserting data:", error);
  } finally {
    await client.close();
  }
}

insertData();
