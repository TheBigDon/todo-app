<template>
  <main>
    <section class="greeting">
      <h2 class="title">Hello, Stepan</h2>
    </section>
    <TodoForm />
    <TodoList :todos="todos" />
  </main>
</template>

<script setup>
import { computed, onMounted } from "vue";
// Components
import TodoForm from "./components/TodoForm.vue";
import TodoList from "./components/TodoList.vue";

// Stores
import { useTodoStore } from "./stores/todos.store";
const todoStore = useTodoStore();

onMounted(() => {
  todoStore.loadTodos();
});
const todos = computed(() => todoStore.todos);
</script>

<style scoped lang="scss">
@import "./assets/_variables.scss";
.greeting {
  .title {
    display: flex;
    color: $dark;
    font-size: 1.5rem;
    font-weight: 700;

    input {
      margin-left: 0.5rem;
      flex: 1 1 0%;
      min-width: 0;
      color: $dark;
      font-size: 1.5rem;
      font-weight: 700;
    }
  }
}
</style>
