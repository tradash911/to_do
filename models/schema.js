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
const gallery = mongoose.model("gallery", toDoSchema, "gallery");

export default gallery;
