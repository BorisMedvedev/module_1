'use strict';

let arrayRandom = [0];
const recursiveFunction = (array) =>
  array.reduce((acc, item) => acc + item, 0) >= 50
    ? [...array]
    : recursiveFunction([...array, Math.floor(Math.random() * 11)]);
console.log(recursiveFunction(arrayRandom));
