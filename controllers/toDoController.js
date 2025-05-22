import toDo from "../models/schema.js";

export const getToDos = async function (req, res) {
  try {
    const toDos = await toDo.find(req.query);
    const toDosCopy = { ...toDos };
    const excludedFields = ["sort,"];
    res.status(200).json({
      status: "succes",
      data: {
        toDos,
      },
    });
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
