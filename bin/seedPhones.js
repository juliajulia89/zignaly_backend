const mongoose = require("mongoose");
require("dotenv/config");
const MONGODB = process.env.MONGODB_URI;
const Phone = require("../models/Phone.model");

const seedPhones = async () => {
  mongoose
    .connect(MONGODB, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    .then((db) => console.log("Connected to the database succesfully"))
    .catch((err) => console.log("Connection failed"));

  try {
   

  } catch (error) {
    console.log(error);
  }
  mongoose.disconnect();
};

seedPhones();
