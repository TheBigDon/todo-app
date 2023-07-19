const db = require("../models");
const Todo = db.todo;

class TodoController {
  async createTodo(req, res) {
    try {
      const todo = await Todo.create({
        content: req.body.content,
        category: req.body.category,
        done: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      res.status(200).json(todo);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}

module.exports = new TodoController();
