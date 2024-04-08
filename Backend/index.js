const express = require ('express')
const app = express();
const port = 8002;
const mongoose = require("mongoose");
const {router,exam} = require('./routes');
require("dotenv").config()
const cors = require("cors");

async function main() {
  await mongoose.connect(
    process.env.MONGO_URL
  );
}
app.use(cors())
app.use(express.json());
app.use("/university",router)
app.use("/exams",exam);
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