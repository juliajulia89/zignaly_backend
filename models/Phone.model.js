const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const phoneSchema = new Schema({
  name: { type: String },
  description: { type: String },
  color: { type: String },
  price: { type: Number },
  image: { type: String },
});

module.exports = mongoose.model("Phone", phoneSchema);
