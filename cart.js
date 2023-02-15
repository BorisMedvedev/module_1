'use strict';

const cart = {
  items: [],
  get totalPrice() {
    return this.calculateItemPrice();
  },
  count: 0,

  calculateItemPrice() {
    return this.items.reduce((acc, item) => {
      return acc + item.price * item.amount;
    }, 0);
  },
  add(item, price, amount = 1) {
    this.items.push({ item, price, amount });
    this.increaseCount(amount);
  },
  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },
  print() {
    let printOut = JSON.stringify(this.items);
    return printOut;
  },
  increaseCount(num) {
    return (this.count += num);
  },
};

cart.add('товар 1', 231, 1);
cart.add('товар 2', 140, 2);
cart.add('товар 3', 265, 3);
cart.add('товар 4', 324, 4);
console.log(cart.print());
console.log(cart.items);
console.log(cart.totalPrice);
console.log(cart.count);
