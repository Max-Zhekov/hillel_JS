"use strict";

const enter = document.querySelector("#enter");
const goTo = document.querySelector("#goTo");
let address = "";

enter.addEventListener("click", () => {
  const input = prompt("Enter address (e.g., https://example.com):");
  if (input) {
    address = input;
  }
});

goTo.addEventListener("click", () => {
  if (address) {
    location.assign(address);
  } else {
    alert("No address entered yet.");
  }
});
