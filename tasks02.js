"use strict";

const isPrime = (num) => {
  let res = num > 1 ? true : false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      res = false;
      break;
    }
  }
  return res;
};
console.log(isPrime(2));
console.log(isPrime(3));
