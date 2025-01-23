import mongoose from "mongoose";


const URI = process.env.MONGODBURL

mongoose.connect(URI)
  .then(() => console.log("connected.....!"))
  .catch((err) => console.log(err));

module.exports = mongoose;