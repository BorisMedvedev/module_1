"use strict";
// {
//   const finance = +prompt("Введите сумму вашего дохода");
//   if (finance <= 15000) {
//     console.log(`Сумма налога: ${finance * 0.13}`);
//   }
//   if (finance > 15000 && finance <= 50000) {
//     console.log(`Сумма налога: ${finance * 0.2}`);
//   }
//   if (finance > 50000) {
//     console.log(`Сумма налога: ${finance * 0.3}`);
//   }
// }

{
  const finance = +prompt("Введите сумму вашего дохода");
  if (finance <= 15000) {
    console.log(`Сумма налога: ${finance * 0.13}`);
  }
  if (finance > 15000 && finance <= 50000) {
    console.log(`Сумма налога: ${(finance - 15000) * 0.2}`);
  }
  if (finance > 50000) {
    console.log(`Сумма налога: ${(finance - 50000) * 0.3}`);
  }
}
