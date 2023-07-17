export function getTodo(state) {
  localStorage.setItem("todos", JSON.stringify(state));
}
