'use strict';

let arrayRandom;
const recursiveFunction = (array = []) => {
  const num = Math.floor(Math.random() * 11);
  array.push(num);

  if (array.reduce((acc, item) => acc + item, 0) < 50) {
    recursiveFunction(array);
  }
  return array;
};

console.log(recursiveFunction(arrayRandom));
console.log(arrayRandom.reduce((acc, item) => acc + item, 0));
