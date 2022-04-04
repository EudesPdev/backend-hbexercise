import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import rou from "./routes/userRouter.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const port = 5000 || process.env.PORT;

mongoose.connect(
  process.env.MONGODB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => {
    if (err) throw err;
    console.log("MongoDB connected.");
  }
);

app.use("/users", rou);

app.listen(port, () => {
  console.log(`Listening to ${port}`);
});
