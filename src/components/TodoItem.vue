<template>
  <label>
    <input type="checkbox" v-model="todo.done" />
    <span
      :class="`bubble ${
        todo.category === 'business' ? 'business' : 'personal'
      }`"
    ></span>
  </label>
  <div class="todo-content">
    <input type="text" v-model="todo.content" />
  </div>
  <div class="actions">
    <button class="delete" @click="removeTodo(todo.createdAt)">Delete</button>
  </div>
</template>

<script setup>
import { useTodoStore } from "../stores/todos.store";
const todoStore = useTodoStore();

const removeTodo = (createdAt) => {
  todoStore.remove(createdAt);
};

const props = defineProps({
  todo: {
    type: Object,
    required: true,
    default: () => {},
  },
});
</script>

<style scoped>
.todo-item label {
  display: block;
  margin-right: 1rem;
  cursor: pointer;
}

.todo-item .todo-content {
  flex: 1 1 0%;
}

.todo-item .todo-content input {
  color: var(--dark);
  font-size: 1.125rem;
}

.todo-item .actions {
  display: flex;
  align-items: center;
}

.todo-item .actions button {
  display: block;
  padding: 0.5rem;
  border-radius: 0.25rem;
  color: #fff;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

.todo-item .actions button:hover {
  opacity: 0.75;
}

.todo-item .actions .edit {
  margin-right: 0.5rem;
  background-color: var(--primary);
}

.todo-item .actions .delete {
  background-color: var(--danger);
}

.todo-item.done .todo-content input {
  text-decoration: line-through;
  color: var(--grey);
}
</style>
