const items = document.querySelectorAll(".todo-item");

items.forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("completed");
  });
});
