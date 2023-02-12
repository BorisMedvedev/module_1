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

const addPrefix = (arr, prefix) => arr.map((el) => `${prefix} ${el}`);

console.log(addPrefix(names, "Mr"));
