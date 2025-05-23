import express from "express";
import {
  createArtist,
  getGallery,
  getGalleryPreview,
} from "../controllers/galleryController.js";

const router = express.Router();

router.get("/preview", getGalleryPreview);
router.get("/", getGallery);
router.post("/", createArtist);
export default router;
