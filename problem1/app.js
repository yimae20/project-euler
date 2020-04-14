'use strict';

function getValue(num) {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log('15未満の3または5の倍数の和は ' + getValue(15) + ' です。');
console.log('1000未満の3または5の倍数の和は ' + getValue(1000) + ' です。');
