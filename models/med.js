const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const medSchema = new Schema({
  medication: String,
  frequency: String,
  prescribed_by: String,
  notes: String
});

const Med = mongoose.model("Med", medSchema);

module.exports = Med;
