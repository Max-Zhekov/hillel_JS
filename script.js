"use strict";
const user = {
  userName: "Idris",
  userAge: 21,
  userLocation: "Poland",
  userInfo() {
    console.log(
      `User name - ${this.userName}, user age - ${this.userAge}, user location - ${this.userLocation}`
    );
  },
};
console.log(user.userInfo());
