import galleryImages from "../models/schema.js";

export const getGallery = async function (req, res) {
  try {
    const gallery = await galleryImages.find(req.query);
    const galleryCopy = { ...gallery };
    const excludedFields = ["sort,"];
    res.status(200).json({
      status: "succes",
      data: {
        gallery,
      },
    });
  } catch (err) {
    res.status(404).json({ status: err, message: "error" });
  }
};
export const getGalleryPreview = async function (req, res) {
  try {
    const data = await galleryImages.find(
      {},
      {
        name: 1,
        artist: {
          name: 1,
        },
        images: {
          thumbnail: 1,
        },
      }
    );
    res.status(200).json(data);
    console.log("get preview");
  } catch (err) {
    res.status(404).json({ status: err, message: "error" });
  }
};
export const getArtistById = async function (req, res) {
  try {
    const { id } = req.params;
    const artist = await galleryImages.findById(id);
    if (!artist)
      return res
        .status(404)
        .json({ status: "error", message: "artist not found" });

    res.status(200).json({
      status: "succes",
      data: artist,
    });
    console.log("get artist by id");
  } catch (err) {
    res.status(404).json({ status: err, message: "error" });
  }
};
export const getAllID = async function (req, res) {
  try {
    const data = await galleryImages.find(
      {},
      {
        _id: 1,
      }
    );
    res.status(200).json(data);
    console.log("get ids");
  } catch (err) {
    res.status(404).json({ status: err, message: "error" });
  }
};
export const createArtist = async function (req, res) {
  try {
    const newTodo = new galleryImages(req.body);
    const save = await newTodo.save();
    res.status(201).json(save);
  } catch (err) {
    res.status(404).json({ status: err, message: "error" });
  }
};
