'use strict';

function primeFactorization(num) {
  let maxPrimeFactor = 0;
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      maxPrimeFactor = i;
      //console.log(maxPrimeFactor);
      num /= i;
      i = 2;
    }
  }
  if (maxPrimeFactor === 0) {
    console.log('この数は素数です。');
  }
  return maxPrimeFactor;
}

console.log('数60085147514の最大の素因数は ' + primeFactorization(60085147514) + ' です。');
