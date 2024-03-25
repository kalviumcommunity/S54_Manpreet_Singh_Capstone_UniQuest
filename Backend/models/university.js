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
  },
  image:{
    type: String,
    required: true,
  }
});

const University = mongoose.model("University",universitySchema );

module.exports = University;