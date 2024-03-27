const mongoose = require("mongoose");

const universitySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description:{
    type: String,

  },
  ranking: {
    type: Object,
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
  image:{
    type: String,
  }
});

const University = mongoose.model("University",universitySchema );

module.exports = University;