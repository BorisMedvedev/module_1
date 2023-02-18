'use strict';

const rectangle = {
  width: 5,
  height: 5,

  set side1(value) {
    this.width = value;
  },

  set side2(value) {
    this.height = value;
  },

  get perimetr() {
    return `"${(this.width + this.height) * 2} см"`;
  },
  get area() {
    return `"${this.width * this.height} см"`;
  },
};
rectangle.side1 = 10;
rectangle.side2 = 7;
console.log(rectangle.perimetr);
console.log(rectangle.area);
