export function saveToLocalStorage(ul) {
  const tasks = [];

  ul.querySelectorAll("li").forEach((li) => {
    const text = li.querySelector("span").textContent;
    const completed = li.classList.contains("todo-item--checked");
    tasks.push({ text, completed });
  });

  localStorage.setItem("todos", JSON.stringify(tasks));
}
