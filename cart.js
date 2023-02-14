'use strict';

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,
  getTotalPrice() {
    return this.totalPrice;
  },
  calculateItemPrice() {
    return this.items.reduce((acc, item) => {
      return acc + item.priceGoods * item.quantityGoods;
    }, 0);
  },
  add(nameGoods, priceGoods, quantityGoods = 1) {
    this.items.push({ nameGoods, priceGoods, quantityGoods });
    this.increaseCount(quantityGoods);
  },
  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },
  print() {
    let printOut = JSON.stringify(this.items);
    console.log(printOut);
    return printOut;
  },
  increaseCount() {
    return (this.count += quantityGoods);
  },
};
