const express = require ('express')
const app = express();
const port = 8002;
const mongoose = require("mongoose");
require("dotenv").config()

async function main() {
  await mongoose.connect(
    process.env.MONGO_URL
  );
}
app.use(express.json());
app.get('/',(req,res)=>{
  main()
  .then(() => {
    res.send("Connection created Successfully!");
  })
  .catch((err) => {
    res.send(err)
  });
})

app.get('/ping',(req,res)=>{
  res.send("pong")
})
app.listen(port,()=>{
  console.log(`Server is started on ${port}`)
})