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

const getAveragePriceGoods = (arr) => {
  const newArr = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const res = arr[i];
    const [x, y] = res;

    const q = Math.round(y / x);
    newArr.push(q);

    sum += newArr[i];
  }
  let res2 = Math.round(sum / newArr.length);
  console.log(`средняя стоимость одного товара в магазине: ${res2} рублей`);
};
