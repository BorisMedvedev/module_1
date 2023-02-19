'use strict';

const rectangle = {
  _width: 5,
  _height: 5,

  set width(value) {
    this._width = value;
  },

  set height(value) {
    this._height = value;
  },

  get perimetr() {
    return `"${(this._width + this._height) * 2} см"`;
  },
  get area() {
    return `"${this._width * this._height} см"`;
  },
};
rectangle.side1 = 10;
rectangle.side2 = 7;
console.log(rectangle.perimetr);
console.log(rectangle.area);
