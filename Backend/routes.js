const mongoose = require("mongoose");
const express = require("express");
const app = express();
const router = express.Router();
const exam = express.Router();
const University = require("./models/university");
const Exam = require("./models/exams");
require("dotenv").config();


router.use(express.json());
exam.use(express.json());

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}

main()
  .then(() => {
    console.log("Connection Successful!");
  })
  .catch((err) => console.log("Error Connecting!", err));


  router.get("/", async (req, res) => {
    await University.find().then((data) => {
      returnData = data;
    });
    res.send(returnData);
  });

  exam.get("/",async(req,res)=>{
    await Exam.find().then((data)=>{
        returnExam = data
    });
    res.send(returnExam);
  })
  

  module.exports = {router,exam};
