'use strict';

const random = Math.floor(Math.random() * 100);
const newBot = (num) => {
  const res = prompt('Введите число от 0 до 100:');
  let input = res.trim();

  if (isNaN(input)) alert('Введите число!');

  if (input > 0 && input !== '') {
    if (input > num) {
      alert('меньше');
      newBot(num);
    } else if (input < num) {
      alert('Больше');
      newBot(num);
    } else {
      alert('Правильно!');
      return;
    }
  } else {
    alert('введите корректные данные');
    newBot(num);
  }
  return;
};

newBot(random);
