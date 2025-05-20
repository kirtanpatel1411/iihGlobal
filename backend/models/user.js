const mongoose = require("mongoose");
const userSchemas = new mongoose.Schema({
  id: { type: String },
  firstName: String,
  lastName: String,
  number: Number,
  email: { type: String, unique: true },
  password: String,
});
module.exports = mongoose.model("User", userSchemas);
