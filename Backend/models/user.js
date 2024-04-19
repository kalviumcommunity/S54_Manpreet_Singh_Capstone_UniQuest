const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email:{
    type: String,
    required: true,
  },
  joiningDate: {
    type: Date,
    default: new Date()
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;