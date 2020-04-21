'use strict';

function differenceSquare(number: number): number {
  let sumSquare = 0; //自然数の和の2乗
  let squareSum = 0; //自然数の2乗の和
  for (let i = 1; i <= number; i++) {
    sumSquare += i;
    squareSum += Math.pow(i, 2);
  }
  sumSquare = Math.pow(sumSquare, 2);
  return sumSquare - squareSum;
}

console.log(`最初の100個の自然数の2乗の和と和の2乗の差は ${differenceSquare(100)} です。`);
