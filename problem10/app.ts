'use strict';

function isPrime(number: number): boolean {
  const loopLimit = Math.sqrt(number);
  for (let i = 2; i <= loopLimit; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function sumPrimes(primesBelowNumber: number): number {
  let value = 0;
  for (let i = 2; i <= primesBelowNumber; i++) {
    if (isPrime(i)) {
      value += i;
    }
  }
  return value;
}

const primesBelowNumber = 2000000;
console.log(`${primesBelowNumber}以下の素数の和は ${sumPrimes(primesBelowNumber)} です。`);
