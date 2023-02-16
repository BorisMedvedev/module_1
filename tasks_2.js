'use strict';

let arr2 = [];
const recursiveFunction = (array) => {
  for (let i = 0; i < 10; i++) {
    let a = Math.round(Math.random() * 10);
    array.push(a);
  }

  console.log(array);
};

recursiveFunction(arr2);
