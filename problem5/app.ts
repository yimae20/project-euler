'use strict';

function smallestPositiveNumber(number: number): number {
  let multipleNumber = 1;
  while (true) {
    if (isIntegerMultiple(number, multipleNumber)) {
      return number * multipleNumber;
    }
    multipleNumber++;
  }
}

function isIntegerMultiple(number: number, multipleNumber: number): boolean {
  for (let i = number; i >= 1; i--) {
    if ((number * multipleNumber) % i === 0) {
    } else {
      return false;
    }
  }
  return true;
}

console.log(`1から20までのすべての数を余すことなく割ることができる最小の正の数は${smallestPositiveNumber(20)}です。`);
