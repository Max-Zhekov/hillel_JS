"use strict";

import { saveToLocalStorage } from "./saveToLocalStorage";

const form = document.querySelector("form");
const userText = document.querySelector(".js--form__input");
const ul = document.querySelector("ul");

function loadFromLocalStorage() {
  const storedTasks = localStorage.getItem("todos");
  if (storedTasks) {
    const tasks = JSON.parse(storedTasks);
    tasks.forEach((task) => {
      buildTask(task.text, task.completed);
    });
  }
}

function buildTask(value, completed = false) {
  const li = document.createElement("li");
  li.classList.add("todo-item");
  if (completed) {
    li.classList.add("todo-item--checked");
  }

  const input = document.createElement("input");
  input.type = "checkbox";
  input.checked = completed;

  const span = document.createElement("span");
  span.textContent = value;
  span.classList.add("todo-item__description");

  const button = document.createElement("button");
  button.textContent = "Видалити";
  button.classList.add("todo-item__delete");

  li.append(input, span, button);
  ul.append(li);

  input.addEventListener("change", () => {
    li.classList.toggle("todo-item--checked");
    saveToLocalStorage(ul);
  });

  button.addEventListener("click", () => {
    li.remove();
    saveToLocalStorage(ul);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const value = userText.value.trim();

  if (!value) return;

  buildTask(value);
  saveToLocalStorage(ul);
  userText.value = "";
});
document.addEventListener("DOMContentLoaded", loadFromLocalStorage);
