import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import todoRoutes from "./routes/toDoRoutes.js";

/* const router = express.Router(); */
/*global process, a*/
/*eslint no-undef: "error"*/
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1/todos", todoRoutes);

const mongo = process.env.MONGO_URL;
mongoose
  .connect(mongo, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen("5000", () => {
  console.log("server started");
});
