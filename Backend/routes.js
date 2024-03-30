const mongoose = require("mongoose");
const express = require("express");
const app = express();
const router = express.Router();
const University = require("./models/university");
require("dotenv").config();


router.use(express.json());

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
  

  module.exports = {router};
