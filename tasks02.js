"use strict";

const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (arr) => {
  let sum = 0;

  const newArr = [...arr];
  for (let i = 0; i < newArr.length; i++) {
    sum += newArr[i];
  }
  const res = Math.round(sum / newArr.length);
  console.log(
    `количество покупок: ${newArr.length}, средний чек на сумму ${res} рублей`
  );
  return res;
};

getAverageValue(allСashbox);
