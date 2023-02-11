"use strict";

const names = [
  "Noah",
  "Liam",
  "Mason",
  "Jacob",
  "Robot",
  "William",
  "Ethan",
  "Michael",
  "Alexander",
];

const addPrefix = (arr, prefix) => {
  let newArr = arr.map((el) => `${prefix} ${el}`);

  console.info(newArr);
  return newArr;
};

addPrefix(names, "Mr");
