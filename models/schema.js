import mongoose, { Schema } from "mongoose";

const toDoSchema = new mongoose.Schema({
  name: String,
  year: Number,
  description: String,
  source: String,
  artist: {
    image: String,
    name: String,
  },
  images: {
    thumbnail: String,
    hero: {
      small: String,
      large: String,
    },
  },
  gallery: String,
});
const toDo = mongoose.model("toDo", toDoSchema, "gallery");

export default toDo;
