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

mongoose
  .connect(
    `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.oaayn8w.mongodb.net/todolist?retryWrites=true&w=majority&appName=Cluster0`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("connected");
  })
  .catch(() => {
    console.log("error");
  });

app.listen("5000", () => {
  console.log("serveer started");
});
