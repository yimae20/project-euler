'use strict';
var num = 1000;
var sum = 0;

for (var i = 1; i < num; i++) {
  if(i % 3 === 0 || i % 5 === 0) {
    sum = sum + i;
  }
}
console.log('1000以下の3または5の倍数の和は ' + sum + ' です。');
