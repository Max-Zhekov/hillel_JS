"use strict";

const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function () {
  const taskText = taskInput.value.trim();
  if (!taskText) return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <button class="btn-delete">Видалити</button>
  `;

  taskList.appendChild(li);
  taskInput.value = "";
});

taskList.addEventListener("click", function (event) {
  if (event.target.classList.contains("btn-delete")) {
    event.target.closest("li").remove();
  }
});
