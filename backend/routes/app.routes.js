const express = require("express");
const {
  getAllTodos,
  createTodo,
  getTodoById,
  editTodo,
  deleteTodo,
} = require("../controllers/app.controllers");
const router = express.Router();

router.get("/all", getAllTodos);
router.get("/find/:id", getTodoById);
router.post("/add", createTodo);
router.patch("/edit/:id", editTodo);
router.delete("/delete/:id", deleteTodo);

module.exports = router;
