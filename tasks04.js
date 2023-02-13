"use strict";

const allСashbox2 = [
  [12, 4500],
  [7, 3210],
  [4, 650],
  [3, 1250],
  [9, 7830],
  [1, 990],
  [6, 13900],
  [1, 370],
];

const getAveragePriceGoods = (data) =>
  data
    .reduce((accArr, item) => [accArr[0] + item[0], accArr[1] + item[1]])
    .reduce((total, i) => Math.floor(i / total));

console.log(getAveragePriceGoods(allСashbox2));
//760
