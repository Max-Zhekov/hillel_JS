"use strict";
const contactBook = {
  contacts: [
    {
      name: "Olena",
      phone: "+380631112233",
      email: "olena@example.com",
    },
    {
      name: "Andriy",
      phone: "+380501234567",
      email: "andriy@example.com",
    },
  ],
  findContact(name) {
    const contact = this.contacts.find((element) => element.name === name);
    return contact ? contact : "User not found";
  },
  addContact(userName, userPhone, userEmail) {
    this.contacts.push({ name: userName, phone: userPhone, email: userEmail });
    return this.contacts;
  },
};

console.log(contactBook.findContact("Andriy"));
console.log(contactBook.findContact("Dima"));
console.log(contactBook.findContact("Olena"));
console.log(contactBook.findContact(123));

console.log(contactBook.addContact("Dima", "+380000000", "dima@gmail.com"));
