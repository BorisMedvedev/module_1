'use strict';

const leapYears = (n, m) => {
  const arrayDate = [];
  const min = Math.min(n, m);
  const max = Math.max(n, m);
  const isLeapYear = (year) => {
    return new Date(year, 1, 29).getMonth() === 1;
  };
  for (let i = min; i <= max; i++) {
    if (isLeapYear(i) && min > 0 && max > 0) {
      arrayDate.push(i);
    }
  }
  return arrayDate;
};

console.log(leapYears(2000, 2010));
