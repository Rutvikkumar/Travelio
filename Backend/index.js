import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";


import userRoutes from "./routes/userRoutes.js"

dotenv.config();

const port = process.env.PORT || 6000;
const uri = process.env.MONGODBURL;

const app = express();
app.use(express.json()) 

try {
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB Connected");
} catch (err) {
  console.error(err.message);
  // Exit process with failure
  process.exit(1);
}


//! our routs
app.use("/user", userRoutes);


app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
