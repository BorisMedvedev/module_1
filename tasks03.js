'use strict';
const generator3 = (n, m, count, num = '') => {
  const array = [];
  const optionalArray = ['even', 'odd'];
  const min = Math.min(n, m);
  const max = Math.max(n, m) - +optionalArray.includes(num);

  for (let i = 0; i < count; i++) {
    let item = Math.floor(Math.random() * (max - min + 1) + min);
    if ((num === 'even' && item % 2) || (num === 'odd' && !(item % 2))) ++item;
    array.push(item);
  }
  return array;
};
console.log(generator3(0, -50, 99, 'even'));
