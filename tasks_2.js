'use strict';

const arrayRandom = [];
const recursiveFunction = (array) => {
  let res = array.reduce((acc, item) => acc + item, 0);
  let num = Math.floor(Math.random() * 11);
  array.push(num);

  return array;
};

console.log(recursiveFunction(arrayRandom));

console.log(arrayRandom.reduce((acc, item) => acc + item, 0));
