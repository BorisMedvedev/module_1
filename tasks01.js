"use strict";

const foo = () => {
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} в степени ${j} = ${Math.pow(i, j)}`);
    }
  }
};

foo();
