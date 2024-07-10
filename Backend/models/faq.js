const mongoose = require("mongoose");

const FaqSchema = new mongoose.Schema({
  question: {
    type: String,
  },
  answer:{
    type: String, 
  },
});

const FAQ = mongoose.model("FAQ",FaqSchema );

module.exports = FAQ;

