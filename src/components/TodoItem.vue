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

<style scoped lang="scss">
@import "../assets/variables";
.todo-item {
  label {
    display: block;
    margin-right: 1rem;
    cursor: pointer;
  }

  .todo-content {
    flex: 1 1 0%;

    input {
      color: $dark;
      font-size: 1.125rem;
    }
  }

  .actions {
    display: flex;
    align-items: center;

    button {
      display: block;
      padding: 0.5rem;
      border-radius: 0.25rem;
      color: #fff;
      cursor: pointer;
      transition: 0.2s ease-in-out;

      &:hover {
        opacity: 0.75;
      }
    }

    .delete {
      background-color: $danger;
    }
  }
}

.todo-item.done {
  .todo-content {
    input {
      text-decoration: line-through;
      color: $grey;
    }
  }
}
</style>
