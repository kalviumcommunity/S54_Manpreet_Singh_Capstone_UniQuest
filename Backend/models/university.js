const mongoose = require("mongoose");

const universitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description:{
    type: String,
    required: true,
  },
  ranking: {
    type: String,
    required: true,
  },
  Contact: {
    type: String,
    required: true,
  },
  Eligibility: {
    type: String,
    required: true,
  },
  Placement: {
    type: String,
    required: true,
  },
  examType: {
    type: String,
    required: true,
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;