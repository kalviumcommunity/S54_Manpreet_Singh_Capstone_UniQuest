const mongoose = require("mongoose");

const TestimonialSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  content:{
    type: String, 
  },
  image:{
    type: String, 
    default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVhtFJc9v3hEBfhJiOhYMS_60ieEbiOjPJyxl8F2dIBw&s",
  },
});

const Testimonial = mongoose.model("Testimonial",TestimonialSchema );

module.exports = Testimonial;