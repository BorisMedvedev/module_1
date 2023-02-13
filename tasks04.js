'use strict';

const leapYears = (n, m) => {
  const arrayDate = [];
  const min = Math.min(n, m);
  const max = Math.max(n, m);
  const isLeapYear = (year) => {
    return new Date(year, 1, 29).getMonth() === 1;
  };
  if (max < min) {
    for (let i = max; i <= min; i++) {
      if (isLeapYear(i)) {
        arrayDate.push(i);
      }
    }
  } else
    for (let i = min; i <= max; i++) {
      if (isLeapYear(i)) {
        arrayDate.push(i);
      }
    }
  return arrayDate;
};

console.log(leapYears(1990, 2020));
