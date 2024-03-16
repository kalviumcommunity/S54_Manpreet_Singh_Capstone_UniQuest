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
app.use((err, req, res, next) => {
  let { status = 500, message = "Some error occured..!" } = err;
  res.status(status).send(message);
});
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