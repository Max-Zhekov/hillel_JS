"use strict";
const numbers = [];
for (let i = 0; i < 100; i++) {
  numbers.push(Math.floor(Math.random() * 1000));
}
const evenNumbers = [];
numbers.forEach((item) => (item % 2 === 0 ? evenNumbers.push(item) : null));
console.log(evenNumbers);
