import toDo from "../models/schema.js";

export const getToDos = async function (req, res) {
  try {
    const toDos = await toDo.find();
    res.json(toDos);
  } catch (err) {
    console.log(err);
  }
};

export const createToDo = async function (req, res) {
  try {
    const newTodo = new toDo(req.body);
    const save = await newTodo.save();
    res.status(201).json(save);
  } catch (error) {
    res.status(404).json({ status: error });
  }
};
