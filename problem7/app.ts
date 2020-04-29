'use strict';

function x_thPrimeNumber(inputNumber: number) {
  let primeNumberCount = 0;
  let primeNumber = 2;
  while (primeNumberCount < inputNumber) {
    if (isPrimeFactor(primeNumber)) {
      primeNumberCount++;
      // console.log(primeNumber);
    }
    primeNumber++;
  }
  return primeNumber - 1;
}

function isPrimeFactor(number: number): boolean {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(`10001番目の素数は ${x_thPrimeNumber(10001)} です。`);
