"use strict";
function random(number) {
  return Math.ceil(Math.random() * number);
}

let name = prompt("Привет! Как тебя зовут?");

while (name == "" || name == null) {
  name = prompt("Привет! Как тебя зовут?");
}

alert(
  name +
    ', давай с тобой сыграем в игру. Я загадал число от 1 до 1000. Попробуй отгадать его. После каждой попытки я скажу "мало", "много" или "верно". Когда тебе надоест играть, нажми кнопку Esc на клавиатуре. Поехали!'
);

let number = random(1000);

let answer = prompt("Какое число я загадал?");

let counter = 1;

if (answer == null) {
  alert("Пока! Как нибудь сыграем ещё. ^_^");

  answer == +answer;
} else {
  while (answer != number && answer != null) {
    answer < number
      ? (answer = prompt("Мало. Попробуй ещё раз!"))
      : answer > number
      ? (answer = prompt("Много. Попробуй ещё раз!"))
      : answer != parseInt(answer)
      ? (answer = prompt("Вводить нужно числа.  Какое число я загадал?"))
      : false;

    counter = counter + 1;
  }
  if (answer == number) {
    alert(
      "Верно! Это число " +
        number +
        "." +
        " Тебе понадобилось " +
        counter +
        " попыток."
    );
  } else if (answer == null) {
  }
  alert("Пока! Как нибудь сыграем ещё. ^_^");
}
