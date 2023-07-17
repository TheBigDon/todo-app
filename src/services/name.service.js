export function updateName(newVal) {
  localStorage.setItem("name", newVal);
}

export function getName(name) {
  name.value = localStorage.getItem("name") || "";
}
