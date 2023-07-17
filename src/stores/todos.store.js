import { defineStore } from "pinia";
import { ref, watch } from "vue";

// Services
import { setTodo } from "../services/todos.service";

export const useTodoStore = defineStore("todoStore", () => {
  const todos = ref([]);

  const todosInLocalStorage = localStorage.getItem("todos");
  if (todosInLocalStorage) {
    todos.value = JSON.parse(todosInLocalStorage)._value;
  }

  watch(
    () => todos,
    (state) => {
      setTodo(state);
    },
    { deep: true }
  );

  const add = (inputContent, inputCategory) => {
    todos.value.push({
      content: inputContent,
      category: inputCategory,
      done: false,
      createdAt: new Date().getTime(),
    });
  };

  const remove = (createdAt) => {
    todos.value = todos.value.filter((todo) => todo.createdAt !== createdAt);
  };

  return {
    todos,
    add,
    remove,
  };
});
