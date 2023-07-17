<template>
  <section class="todo-list">
    <h3>TODO LIST</h3>
    <div class="list">
      <!-- TODO: посмотри как указываются динамические классы во vue(массивы и объекты) -->
      <div
        v-for="todo in todos"
        :class="`todo-item ${todo.done && 'done'}`"
        :key="todo.createdAt"
      >
        <TodoItem :todo="todo" />
      </div>
    </div>
  </section>
</template>

<script setup>
import TodoItem from "./TodoItem.vue";

const props = defineProps({
  todos: {
    type: Array,
    required: true,
    defualt: () => {},
  },
});
</script>

<style scoped>
.todo-list .list {
  margin: 1rem 0;
}

.todo-list .todo-item {
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: var(--shadow);
  margin-bottom: 1rem;
}
</style>
