const mongoose = require("mongoose");

const universitySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description:{
    type: String,

  },
  ranking: {
    type: String,
  },
  contact: {
    type: Object,

  },
  eligibility: {
    type: String,
  },
  placement: {
    type: String,
  },
  examType: {
    type: String,
  },
  image1:{
    type: String,
  },
  image2:{
    type: String,
  }
});

const University = mongoose.model("University",universitySchema );

module.exports = University;