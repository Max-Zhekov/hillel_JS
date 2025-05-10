"use strict";

const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function () {
  const taskText = taskInput.value.trim();

  if (!taskText) {
    alert("Будь ласка, введіть текст завдання");
    return;
  }

  if (taskText.length > 100) {
    alert("Занадто довгий текст (макс. 100 символів)");
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.classList = "btn-delete";
  deleteBtn.textContent = "Видалити";
  deleteBtn.setAttribute("aria-label", "Видалити завдання");

  li.append(span, deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
});

taskList.addEventListener("click", function (event) {
  if (event.target.classList.contains("btn-delete")) {
    event.target.closest("li").remove();
  }
});
