'use strict';

function primeFactorization(num) {
  let largestPrimeFactor = 0;
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      largestPrimeFactor = i;
      //console.log(largestPrimeFactor);
      num /= i;
      i = 2;
    }
  }
  if (largestPrimeFactor === 0) {
    console.log('この数は素数です。');
  }
  return largestPrimeFactor;
}

console.log('数60085147514の最大の素因数は ' + primeFactorization(60085147514) + ' です。');
