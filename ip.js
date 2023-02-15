'use strict';

function unique(arr) {
  const result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result.length;
}

const listIPv4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(unique(listIPv4));
