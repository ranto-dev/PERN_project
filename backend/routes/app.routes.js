const express = require("express");
const {
  getAllTodos,
  createTodo,
  getTodoById,
  editTodo,
  deleteTodo,
} = require("../controllers/app.controllers");
const route = express.Router();

route.get("/api", getAllTodos);
route.post("/api/create", createTodo);
route.get("/api/get/:id", getTodoById);
route.put("/api/edit/:id", editTodo);
route.delete("/api/delete/:id", deleteTodo);

module.exports = route;
