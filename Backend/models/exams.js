const mongoose = require("mongoose");

const ExamSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description:{
    type: String,

  },
});

const Exam = mongoose.model("Exam",ExamSchema );

module.exports = Exam;