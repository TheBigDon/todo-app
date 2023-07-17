<template>
  <section class="create-todo">
    <h3>CREATE A TODO</h3>
    <form @submit.prevent="addTodo">
      <h4>What`s on your todo list?</h4>
      <input
        type="text"
        placeholder="throw out the trash"
        v-model="inputContent"
      />
      <h4>Pick a category</h4>
      <div class="options">
        <label>
          <input
            type="radio"
            name="category"
            value="business"
            v-model="inputCategory"
          />
          <span class="bubble business"></span>
          <div>Business</div>
        </label>
        <label>
          <input
            type="radio"
            name="category"
            value="personal"
            v-model="inputCategory"
          />
          <span class="bubble personal"></span>
          <div>Personal</div>
        </label>
      </div>
      <input type="submit" value="Add todo" />
    </form>
  </section>
</template>

<script setup>
import { ref } from "vue";

import { useTodoStore } from "../stores/todos.store";

const todoStore = useTodoStore();

const inputContent = ref("");
const inputCategory = ref(null);

const addTodo = () => {
  if (inputContent.value.trim() === "" || inputCategory.value === null) {
    return;
  }

  todoStore.add(inputContent.value, inputCategory.value);

  inputContent.value = "";
  inputCategory.value = null;
};
</script>
<style scoped>
h4 {
  color: var(--grey);
  font-size: 0.875rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.create-todo input[type="text"] {
  display: block;
  width: 100%;
  font-size: 1.125rem;
  padding: 1rem 1.5rem;
  color: var(--dark);
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: var(--shadow);
  margin-bottom: 1.5rem;
}

.create-todo .options {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  margin-bottom: 1.5rem;
}

.create-todo .options label {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: var(--shadow);
  cursor: pointer;
}

.create-todo .options label div {
  color: var(--dark);
  font-size: 1.125rem;
  margin-top: 1rem;
}

.create-todo input[type="submit"] {
  display: block;
  width: 100%;
  font-size: 1.125rem;
  padding: 1rem 1.5rem;
  color: #fff;
  background-color: var(--primary);
  border-radius: 0.5rem;
  box-shadow: var(--personal-glow);
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

.create-todo input[type="submit"]:hover {
  opacity: 0.75;
}
</style>
