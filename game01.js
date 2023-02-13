"use strict";
let input,
  random = Math.floor(Math.random() * 100);

while ((input = prompt("Введите число от 0 до 100:"))) {
  if (isNaN(input)) alert("Введите число!");
  else if (input > random) alert("Меньше!");
  else if (input < random) alert("Больше!");
  else if (input == random) {
    alert("Правильно!");
    break;
  }
}
