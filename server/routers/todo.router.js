const express = require("express");
const todoController = require("../controllers/todo.controller.js");

const router = express.Router();

router.post("/", todoController.create);
router.get("/", todoController.getAll);

module.exports = router;
