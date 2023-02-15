'use strict';
import { listIPv4 } from './ipv.js';

function unique(arr) {
  const result = [...new Set(arr)];

  return result.length;
}

console.log(unique(listIPv4));
