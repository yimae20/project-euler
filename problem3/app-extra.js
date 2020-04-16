'use strict';

function primeFactorization(num) {
  let largestPrimeFactor = 0;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      largestPrimeFactor = i;
      //console.log(largestPrimeFactor);
      num /= i;
      i = 1;
    }
  }
  largestPrimeFactor = num;
  return largestPrimeFactor;
}

console.log('数600851475143の最大の素因数は ' + primeFactorization(600851475143) + ' です。');
