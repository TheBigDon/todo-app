import { ref } from "vue";

// Stores
import { defineStore } from "pinia";

// Services
import { createTodo, deleteTodo, getTodos } from "../services/todos.service";

export const useTodoStore = defineStore("todoStore", () => {
  const todos = ref([]);

  const loadTodos = async () => {
    todos.value = await getTodos();
  };

  const addTodo = async (content, category) => {
    const todo = await createTodo(content, category);
    todos.value.push(todo);
  };

  const removeTodo = async (todoId) => {
    const todo = await deleteTodo(todoId);
    todos.value = todos.value.filter((item) => item.id !== todo.id);
  };

  return {
    todos,
    loadTodos,
    addTodo,
    removeTodo,
  };
});
