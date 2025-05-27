"use strict";
class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }

  getBalance() {
    return this.balance;
  }

  deposit(amount) {
    if (amount <= 0) return "Сума для внесення має бути більше нуля";
    return (this.balance += amount);
  }

  withdraw(amount) {
    if (amount <= 0) return "Сума для зняття має бути більше нуля";
    if (amount > this.balance) return "Недостатньо коштів на рахунку";
    return (this.balance -= amount);
  }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance()); // 1000

account1.deposit(500);

console.log(account1.getBalance()); // 1500

account1.withdraw(200);

console.log(account1.getBalance()); // 1300
