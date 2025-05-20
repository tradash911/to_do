import mongoose, { Schema } from "mongoose";

const toDoSchema = new mongoose.Schema({
  title: String,
  date: {
    type: Date,
    default: Date.now,
  },
});
const toDo = mongoose.model("toDo", toDoSchema, "todolist");

export default toDo;
