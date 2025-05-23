import express from "express";
import {
  createArtist,
  getAllID,
  getArtistById,
  getGallery,
  getGalleryPreview,
} from "../controllers/galleryController.js";

const router = express.Router();

router.get("/preview", getGalleryPreview);
router.get("/", getGallery);
router.post("/", createArtist);
router.get("/allid", getAllID);
router.get("/:id", getArtistById);
export default router;
