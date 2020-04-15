'use strict';

const memo = new Map();
memo.set(0, 1);
memo.set(1, 2);

function fib(n) {
  if (memo.has(n)) {
    return memo.get(n);
  }
  const value = fib(n - 1) + fib(n - 2);
  memo.set(n, value);
  return value;
}

const limitValue = 4 * 10 ** 6; //400万
//const limitValue = 100; //100
let evenNumSum = 0;
let value = 0;

for (let i = 0; i <= limitValue; i++) {
  if (fib(i) % 2 === 0) {
    if (fib(i) > limitValue) {
      break;
    }
    evenNumSum += fib(i);
    //evenNumSum += i + 1;
    //console.log(evenNumSum);
  }
  //console.log(i + 1, fib(i));
}
console.log('400万を超えないフィボナッチ数列の偶数項の合計は ' + evenNumSum + ' です。');
