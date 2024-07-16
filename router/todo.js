const express = require("express");
const router = express.Router();
const uuidv4 = require("uuid").v4;

const todos = [
  {
    id: "haf24jd",
    todo: "do laundry",
    done: false,
  },
  {
    id: "jp2nk12",
    todo: "wash dishes",
    done: true,
  },
];

// Get all todos
router.get("/get-all-todos", (req, res) => {
  res.json(todos);
});

// Get todo by ID
router.get("/get-todo-by-id/:id", (req, res) => {
  const { id } = req.params;
  const todo = todos.find((t) => t.id === id);
  if (todo) {
    res.json(todo);
  } else {
    res.json({
      message:
        "The Todo ID you are looking for does not exist, please check the ID",
    });
  }
});

// Get todos by done status
router.get("/get-todos-by-done/:done", (req, res) => {
  const { done } = req.params;
  const doneStatus = done === "true";
  const newDoneArray = todos.filter((t) => t.done === doneStatus);
  res.json(newDoneArray);
});

// Create new todo
router.post("/create-new-todo", (req, res) => {
  const { todo } = req.body;
  const newTodo = {
    id: uuidv4(),
    todo,
    done: false,
  };
  todos.push(newTodo);
  res.json(todos);
});

// Delete todo by ID
router.delete("/delete-by-id/:id", (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex((t) => t.id === id);
  if (index !== -1) {
    todos.splice(index, 1);
    res.json({ message: "Todo deleted successfully", todos });
  } else {
    res.json({
      message:
        "The Todo ID you are looking for does not exist, please check the ID",
    });
  }
});

module.exports = router;
