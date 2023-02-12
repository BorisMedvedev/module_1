"use strict";
const allStudents = ["Петров", "Иванов", "Васильев", "Степанова", "Яковлева"];
const failedStudents = ["Петров", "Иванов", "Васильев"];

const generateValid = (allE, notPassed) => {
  const successfullyPassed = [];
  for (let indexAll in allE) {
    if (!notPassed.includes(allE[indexAll])) {
      successfullyPassed.push(allE[indexAll]);
    }
  }
  return successfullyPassed;
};

console.log(generateValid(allStudents, failedStudents));

