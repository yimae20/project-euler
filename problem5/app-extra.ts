'use strict';

function calcGreatestCommonDivisor(maxNum: number, number: number): number {
  for (let x = number; x >= 2; x--) {
    if (number % x === 0 && maxNum % x === 0) {
      return number / x;
    }
  }
  return number;
}

function smallestPositiveNumber2(inputNumber: number): number {
  let answer = inputNumber;
  for (let i = inputNumber - 1; i >= 2; i--) {
    // console.log(calcGreatestCommonDivisor(maxNum,i));
    answer *= calcGreatestCommonDivisor(answer, i);
  }
  return answer;
}

console.log(`1から20までのすべての数を余すことなく割ることができる最小の正の数は${smallestPositiveNumber2(20)}です。`);
