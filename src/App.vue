<template>
  <main>
    <section class="greeting">
      <h2 class="title">
        Hello, <input type="text" placeholder="имя" v-model="name" />
      </h2>
    </section>
    <TodoForm />
    <TodoList :todos="todos" />
  </main>
</template>

<script setup>
import { ref, watch, onMounted, computed } from "vue";

// Services
import { updateName, getName } from "./services/name.service";

// Components
import TodoForm from "./components/TodoForm.vue";
import TodoList from "./components/TodoList.vue";

// Stores
import { useTodoStore } from "./stores/todos.store";
const todoStore = useTodoStore();
const todos = computed(() => todoStore.todos);

const name = ref("");

watch(name, (newVal) => {
  updateName(newVal);
});

onMounted(() => {
  getName(name);
});
// TODO: нужно бы использовать scss во всех компонентах
</script>

<style scoped>
.greeting .title {
  display: flex;
}

.greeting .title input {
  margin-left: 0.5rem;
  flex: 1 1 0%;
  min-width: 0;
}

.greeting .title,
.greeting .title input {
  color: var(--dark);
  font-size: 1.5rem;
  font-weight: 700;
}
</style>
