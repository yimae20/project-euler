'use strict';

function fib2(limitValue) {
  let fibN = 1;
  let fibN1 = 1;
  let fibN2 = 0;
  let evenNumSum = 0;
  while (fibN <= limitValue) {
    //console.log(fibN);
    if (fibN % 2 === 0) {
      evenNumSum += fibN;
    }
    let x = fibN1;
    fibN += fibN1;
    fibN1 += fibN2;
    fibN2 = x;
  }
  return evenNumSum;
}
console.log('400万を超えないフィボナッチ数列の偶数値の項の合計は ' + fib2(4000000) + ' です。');

/**
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

function fibCalc(limitValue) {
  let evenNumSum = 0;
  let i = 0;
  while (fib(i) <= limitValue) {
    if (fib(i) % 2 === 0) {
      evenNumSum += fib(i);
    }
    console.log(i + 1, fib(i));
    i++;
  }
  return evenNumSum;
}
console.log('400万を超えないフィボナッチ数列の偶数値の項の合計は ' + fibCalc(4000000) + ' です。');
*/
