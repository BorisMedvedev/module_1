"use strict";

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,
  getTotalPrice: () => {},
  calculateItemPrice: (cart) => {},
  add: (nameGoods, priceGoods, quantityGoods = 1) => {},
  clear: (cart) => {},
  print: () => {},
};

console.log(cart.getTotalPrice());
