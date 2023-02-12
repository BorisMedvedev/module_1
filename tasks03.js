"use strict";

const generator3 = (n, m, count, num = "") => {
  let array = [];

  for (let i = 0; i < count; i++) {
    let res = Math.floor(Math.random() * (m - n + 1) + n);
    array.push(res);
  }
  console.log(array);
  return array;
};

generator3(0, 50, 10, "even");
