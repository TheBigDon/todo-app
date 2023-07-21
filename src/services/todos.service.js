import axios from "../plugins/axios";

export async function createTodo(content, category) {
  const res = await axios.post("/", {
    content: content,
    category: category,
  });

  return res.data;
}

export async function getTodos() {
  const res = await axios.get("/");

  return res.data;
}

export async function deleteTodo(todoId) {
  const res = await axios.delete(`/${todoId}`);

  return res.data;
}
