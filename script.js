"use strict";
const images = ["img/1.jpg", "img/2.jpg", "img/3.jpg"];
const imgElement = document.querySelector(".slider-img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dotsContainer = document.querySelector(".slider-bottom");

let currentIndex = 0;

const showSlide = (index) => {
  imgElement.src = images[index];

  if (currentIndex === 0) {
    prev.style.opacity = 0;
  } else {
    prev.style.opacity = 1;
  }

  if (index === images.length - 1) {
    next.style.opacity = 0;
  } else {
    next.style.opacity = 1;
  }
};

prev.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
    showSlide(currentIndex);
    paintButton();
  }
});

next.addEventListener("click", function () {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    showSlide(currentIndex);
    paintButton();
  }
});

dotsContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("dot")) {
    currentIndex = +event.target.id;
    showSlide(currentIndex);
    paintButton(event);
  }
});

const paintButton = (event) => {
  [...dotsContainer.children].forEach((btn) => {
    btn.classList.remove("active");
    if (event) {
      if (btn.id === event.target.id) {
        btn.classList.add("active");
      }
    } else {
      if (+btn.id === currentIndex) {
        btn.classList.add("active");
      }
    }
  });
};
paintButton();
showSlide(currentIndex);
