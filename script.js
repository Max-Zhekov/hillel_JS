"use strict";
const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const textarea = document.querySelectorAll("textarea");

const regExps = {
  name: /\w+/,
  message: /\w{5,}/,
  phone: /^\+380\d{9}$/,
  email: /^[\w.-]+@[\w.-]+\.\w{2,4}$/,
};

const checkValue = (value, regExp, errorElement) => {
  if (regExp.test(value)) {
    errorElement.style.display = "none";
    return true;
  } else {
    errorElement.style.display = "block";
    return false;
  }
};

const validateValue = (event) => {
  event.preventDefault();

  let isValid = true;

  [...inputs, ...textarea].forEach((input) => {
    const type = input.dataset.type;
    const regExp = regExps[type];
    const errorElement = input.parentElement.querySelector(`.error-${type}`);

    if (regExp && errorElement) {
      const valid = checkValue(input.value, regExp, errorElement);
      if (!valid) {
        isValid = false;
      }
    }
  });
  if (isValid) {
    const formData = new FormData(event.target);
    const formObj = {};

    formData.forEach((value, key) => (formObj[key] = value));

    console.log(formObj);
    alert("All good!");
  }
};

form.addEventListener("submit", validateValue);
