"use strict";
{
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let rain =
    getRandomInt(0, 2) === 1
      ? console.log("Пошёл дождь. Возьмите зонт!")
      : console.log("Дождя нет!");
}

// {
//   const mathematics = +prompt("Введите кол-во баллов по математике:");
//   const russianlanguage = +prompt("Введите кол-во баллов по русскому языку:");
//   const informatics = +prompt("Введите кол-во баллов по информатике:");

//   const resault = mathematics + russianlanguage + informatics;

//   if (resault >= 265) {
//     console.log(`Поздравляю, вы поступили на бюджет! у вас ${resault} баллов`);
//   } else {
//     console.log(`Недостаточно баллов у вас ${resault} баллов`);
//   }
// }

// {
//   const many = +prompt("Введите сумму которую хотите снять");
//   if (many < 100) {
//     console.log("Банкомат может выдавать минимальные купюры 100р");
//   } else {
//     console.log("Заберите дегьги");
//   }
// }
