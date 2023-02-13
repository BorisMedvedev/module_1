"use strict";

const nums = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const allСashbox = (numbers) => {
  const total = numbers.reduce((acc, item) => acc + item, 0);

  return Math.floor(total / numbers.length);
};

console.log(allСashbox(nums));
