"use strict";

const leapYears = (n, m) => {
  let leapYearCount = 0;

  function isLeapYear(year) {
    return new Date(year, 1, 29).getMonth() == 1;
  }

  if (m < n) {
    for (let i = m; i <= n; i++) {
      if (isLeapYear(i)) {
        console.log(i);
        leapYearCount++;
      }
    }
  } else if (n < m) {
    for (let i = n; i <= m; i++) {
      if (isLeapYear(i)) {
        console.log(i);
        leapYearCount++;
      }
    }
  }

  console.log(
    "В заданном диапазоне найдено " +
      leapYearCount +
      " високосных лет, они записаны в консоли."
  );
};

leapYears(1990, 2023);
