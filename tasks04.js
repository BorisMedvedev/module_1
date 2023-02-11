"use strict";

function leapYear(year) {
  return (year & 3) == 0 && (year % 25 != 0 || (year & 15) == 0);
}

console.log(leapYear(2024));
