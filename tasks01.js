"use strict";

const generator = (count) => {
  let a = [];
  let m = 0;
  let n = 100;
  for (let i = m; i < count; ++i) {
    a.push(Math.round(Math.random() * n));
  }
  console.log(a);
};

generator(5);
