export function setTodo(state) {
  localStorage.setItem("todos", JSON.stringify(state));
}
