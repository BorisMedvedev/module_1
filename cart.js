"use strict";

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,

  getTotalPrice: () => cart.totalPrice,
  calculateItemPrice: (cart) => {},
  add: (nameGoods, priceGoods, quantityGoods = 1) => {},
};

console.log(cart.getTotalPrice());

// clear: (cart) => {},
// print: () => {},
