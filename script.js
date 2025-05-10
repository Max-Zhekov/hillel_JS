"use strict";

const container = document.querySelector(".container");
container.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    const buttonName = event.target.dataset.name;
    alert(`Клікнуто на кнопці: ${buttonName}`);
  }
});
