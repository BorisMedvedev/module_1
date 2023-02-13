"use strict";
const generator2 = (n, m, count) => {
  let array = [];
  const min = Math.min(n, m);
  const max = Math.max(n, m);
  for (let i = 0; i < count; i++) {
    array.push(Math.floor(Math.random() * (max - min + 1) + min));
  }
  return array;
};
console.log(generator2(0, -50, 99));
