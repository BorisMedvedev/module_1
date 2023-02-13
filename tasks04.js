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

const getAveragePriceGoods = (data) => {
  return data.reduce((firstArr, secondArr) => [...firstArr, secondArr.reduce((sum, el) => Math.floor(el / sum)),], []);
};

console.log(getAveragePriceGoods(allСashbox2));
