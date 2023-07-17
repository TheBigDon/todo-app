// TODO: может быть стоило назвать setTodo или saveTodo?
export function getTodo(state) {
  localStorage.setItem("todos", JSON.stringify(state));
}
