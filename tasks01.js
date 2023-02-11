"use strict";
const allStudents = ["Петров", "Иванов", "Васильев", "Яковлева", "Степанова"];
const failedStudents = ["Петров", "Иванов", "Васильев"];

const successStudents = (arr_1, arr_2) => {
  const newArr = [...arr_1, ...arr_2];
  let resArr = newArr.filter((item, index) => {
    return newArr.indexOf(item) !== index;
  });
  console.log(resArr);
};
successStudents(allStudents, failedStudents);
