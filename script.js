"use strict";

const text = document.querySelector("#text");
const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  text.classList.toggle("red-color");
});
