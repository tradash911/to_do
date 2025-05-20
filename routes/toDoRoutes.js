import express from "express";
import { createToDo, getToDos } from "../controllers/toDoController.js";

const router = express.Router();

router.get("/", getToDos);
router.post("/", createToDo);
export default router;
