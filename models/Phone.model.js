const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const phoneSchema = new Schema({
  name: { type: String },
  description: { type: String },
  color: { type: String },
  price: { type: Number },
  image: { type: String },
});

module.exports = model("Phone", phoneSchema);
