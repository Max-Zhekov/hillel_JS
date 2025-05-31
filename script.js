"use strict";
const p = document.querySelector("p");
let s = 5;

function sToStr() {
  if (s > 0) {
    s = s - 1;

    let m = Math.trunc(s / 60) + "";
    let sec = (s % 60) + "";

    p.textContent = String(m).padStart(2, 0) + ":" + String(sec).padStart(2, 0);
  }
}

setInterval(sToStr, 1000);
