const Todo = require("../models/todo");

exports.addNewTodo = async (req, res) => {
  try {
    const { userId, title, description } = req.body;

    if (!title || !userId) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const myTodo = new Todo({
      userId,
      title,
      description,
      iscompleted: false,
    });

    await myTodo.save();
    res.status(201).json({ message: "New todo added successfully", todo: myTodo });
  } catch (error) {
    console.error("Error in adding new todo:", error);
    res.status(400).json({ message: "Failed to add new todo" });
  }
};

exports.getAllTodos = async (req, res) => {
    try {
       const todos = await Todo.find();
       res.status(200).json(todos);

    }catch (error) {
        console.log('Error in adding new todo:', error);
        res.status(400).json({message: 'Failed to add new todo'});
    }}

exports.getARecord = async (req, res) => {
    try {
       const todo = await Todo.findById(req.params.id);
       res.status(200).json(todo);
    }catch (error) {
        console.log('Error in fetching todo:', error);
        res.status(400).json({message: 'Failed to fetch todo'});
    }
}

exports.updateTodo = async (req, res) => {
    try {
         const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {new: true});
         res.status(200).json({message: 'Todo updated successfully', todo: todo});
    }catch (error) {
        console.log('Error in updating todo:', error);
        res.status(400).json({message: 'Failed to update todo'});
    }
}
exports.deleteTodo = async (req, res) => {  
    try {
            await Todo.findByIdAndDelete(req.params.id);
            res.status(200).json({message: 'Todo deleted successfully'});
    }catch (error) {
        console.log('Error in deleting todo:', error);
        res.status(400).json({message: 'Failed to delete todo'});
    }   }

exports.getTodosByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const todos = await Todo.find({ userId });
    res.status(200).json(todos);
  } catch (error) {
    console.error("Error fetching user todos:", error);
    res.status(400).json({ message: "Failed to fetch user todos" });
  }
};