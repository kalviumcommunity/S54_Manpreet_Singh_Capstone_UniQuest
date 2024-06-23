const mongoose = require("mongoose");
const express = require("express");
const app = express();
const router = express.Router();
const exam = express.Router();
const UserRouter = express.Router();
const Testimonial = express.Router();
const University = require("./models/university");
const Exam = require("./models/exams");
const User = require("./models/user");
const testimonial = require("./models/testimonial")
require("dotenv").config();


router.use(express.json());
exam.use(express.json());
UserRouter.use(express.json());
Testimonial.use(express.json());

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
  
  UserRouter.get("/", async (req, res) => {
    let result;
    try {
      result = await User.find();
      res.send(result);
    } catch (err) {
      res.status(500).send("Internal Server Error");
    }
  });

  UserRouter.post("/", async (req, res) => {
    console.log("Request body:", req.body);
    try {
      const {  email, name } = req.body;
      let user = await User.findOne({ email });
      console.log("user: ", user);
      if (!user) {
        user = new User({
          name: name,
          email: email,
          // userId: userId,
        });
        await user.save();
        res.status(201).send("User created successfully");
      } else {
  
        res.status(200).json("User already exists");
      }
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

  Testimonial.get("/", async (req, res) => {
    let result;
    try {
      result = await testimonial.find();
      res.send(result);
    } catch (err) {
      res.status(500).send("Internal Server Error");
    }
  });
  module.exports = {router,exam,UserRouter,Testimonial};
  