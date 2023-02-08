"use strict";
{
  const finance = +prompt("Введите сумму вашего дохода");
  if (finance <= 15000) {
    console.log(`ваша сумма наолога ${finance * 0.13}`);
  }
  if (finance > 15000 && finance <= 50000) {
    console.log(
      `ваша сумма наолога ${(finance - 15000) * 0.2 + finance * 0.13}`
    );
  }
  if (finance > 50000) {
    console.log(
      `ваша сумма наолога ${(finance - 15000) * 0.2 + finance * 0.13}`
    );
  }
}
