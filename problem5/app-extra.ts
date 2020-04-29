'use strict';

function calcGreatestCommonDivisor(maxNum: number, number: number): number {
  for (let x = number; x >= 2; x--) {
    if (number % x === 0 && maxNum % x === 0) {
      return number / x;
    }
  }
  return number;
}

// function calcGreatestCommonDivisor2(maxNum: number, number: number, j: number): number {
//   if (maxNum % number === 0) {
//     return j / number;
//   } else if (maxNum % number === 1) {
//     return j;
//   } else {
//     let x = number;
//     let y = maxNum % number;
//     // console.log(x, y);
//     return calcGreatestCommonDivisor2(x, y, j);
//   }
// }

function smallestPositiveNumber2(inputNumber: number): number {
  let answer = inputNumber;
  for (let i = inputNumber - 1; i >= 2; i--) {
    // console.log(calcGreatestCommonDivisor(answer,i));
    answer *= calcGreatestCommonDivisor(answer, i);
  }
  return answer;
}

console.log(`1から20までのすべての数を余すことなく割ることができる最小の正の数は${smallestPositiveNumber2(50)}です。`);
