"use strict";

const generator3 = (n, m, count, num) => {
  let array = [];

  for (let i = 0; i < count; i++) {
    let res = Math.floor(Math.random() * (m - n + 1)) + n;
    if (res % 2 === 0 && num === "even") {
      array.push(res);
    }
    if (res % 2 === 1 && num === "odd") {
      array.push(res);
    }
  }
  console.log(array);
  return array;
};

generator3(0, 50, 500, "even");
