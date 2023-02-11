"use strict";

// function leapYear(year) {
//   return (year & 3) == 0 && (year % 25 != 0 || (year & 15) == 0);
// }

// console.log(leapYear(2024));

var firstYear = prompt("Пожалуйста, введите год - начало диапазона");
var secondYear = prompt("Пожалуйста, введите год - конец диапазона");

var leapYearCount = 0;

function isLeapYear(year) {
  return new Date(year, 1, 29).getMonth() == 1;
}

if (secondYear < firstYear) {
  for (let i = secondYear; i <= firstYear; i++) {
    if (isLeapYear(i)) {
      console.log(i);
      leapYearCount++;
    }
  }
} else if (firstYear < secondYear) {
  for (let i = firstYear; i <= secondYear; i++) {
    if (isLeapYear(i)) {
      console.log(i);
      leapYearCount++;
    }
  }
}

alert(
  "В заданном диапазоне найдено " +
    leapYearCount +
    " високосных лет, они записаны в консоли."
);
