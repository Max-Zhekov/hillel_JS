"use strict";
const photoEL = document.querySelector(".photo");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  const photoNumber = Math.trunc(Math.random() * 9) + 1;
  photoEL.src = `./img/${photoNumber}.jpg`;
});
