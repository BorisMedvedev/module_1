"use strict";

const generator2 = (min, max, count) => {
  let a = [];
  for (let i = 0; i < count; ++i) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    a.push(rand[i]);
    console.log(rand[i]);
    return a;
  }

  console.log(a);
};

generator2(5, 100, 10);
