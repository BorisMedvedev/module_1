"use strict";

const isPrime = (num) => {
  let res = num > 1;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      res = false;
      break;
    }
  }
  return res;
};
console.log(isPrime(-1));
console.log(isPrime(-3));
