const express = require('express');
const { addNewTodo, getAllTodos, getARecord, updateTodo, deleteTodo, getTodosByUser } = require('../controllers/todo.controller');
const { authenticate } = require('../controllers/auth.controller');

const router = express.Router();

router.post("/add", authenticate, addNewTodo);
router.get("/",authenticate,getAllTodos)
router.get("/:id",authenticate,getARecord)
router.put("/:id",authenticate,updateTodo);
router.delete("/:id",authenticate,deleteTodo);
router.get("/user/:userId", getTodosByUser);


module.exports = router;