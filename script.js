"use strict";
class Coach {
  constructor(name, speciality, rate) {
    this.name = name;
    this.speciality = speciality;
    this.rate = rate;
  }

  displayInfo() {
    return `Coach: ${this.name}, Specialization: ${this.speciality}, Rating: ${this.rate}`;
  }
}

const coach1 = new Coach("John Doe", "Fitness", 4.7);
const coach2 = new Coach("Alice Smith", "Yoga", 4.9);
console.log(coach1.displayInfo());
console.log(coach2.displayInfo());
