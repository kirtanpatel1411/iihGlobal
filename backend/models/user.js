const mongoose = require("mongoose");
const userSchemas = new mongoose.Schema({
  id: { type: String },
  fullName: String,
  email: { type: String, unique: true },
  password: String,
});
module.exports = mongoose.model("User", userSchemas);
