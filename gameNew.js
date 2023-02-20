'use strict';

const random = Math.floor(Math.random() * 100);
const newBot = (num) => {
  const input = prompt('Введите число от 0 до 100:');

  switch (true) {
    case input === null:
      return alert('Конец игры');
    case isNaN(input) || +input < 0 || +input > 100:
      alert('Введите число от 0 до 100:');
      break;
    case +input > num:
      alert('Меньше');
      break;
    case +input < num:
      alert('Больше');
      break;
    default:
      return alert('Правильно');
  }
  return newBot(num);
};

newBot(random);
