"use strict";
const p = document.querySelector("p");
let secondsRemaining = 15;

const startTimer = setInterval(sToStr, 1000);

function sToStr() {
  if (secondsRemaining > 0) {
    secondsRemaining = secondsRemaining - 1;

    let minutes = Math.trunc(secondsRemaining / 60) + "";
    let secondsToEnd = (secondsRemaining % 60) + "";

    p.textContent =
      String(minutes).padStart(2, 0) +
      ":" +
      String(secondsToEnd).padStart(2, 0);
  } else {
    clearInterval(startTimer);
  }
}
