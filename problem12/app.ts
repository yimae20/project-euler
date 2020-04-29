// 500個の約数をもつtrianglerNumberを探そうとすると計算量が多すぎて終わらない・・・
/*function countDivisors(trianglerNumber: number): number {
  let divisors = 2; // 1とtrianglerNumberを約数として最初からカウントしておく
  for (let i = 2; i <= Math.floor(trianglerNumber / 2); i++) {
    if (trianglerNumber % i === 0) {
      divisors++;
    }
  }
  return divisors;
}
*/

// 約数の個数の求め方
// N = p^k * q^l * r^m
// (k + 1)(l + 1)(m + 1)
function factorizationInPrimeNumbers(trianglerNumber: number): number[] {
  let num = trianglerNumber;
  let factor: number[] = [];
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      factor = [...factor, i];
      //console.log(largestPrimeFactor);
      num /= i;
      i = 1;
    }
  }
  return (factor = [...factor, num]);
}

function countDivisors2(factor: number[]): number {
  const length = factor.length;
  let divisors = 1;
  let sameFactorcount = 1;
  for (let j = 1; j <= length; j++) {
    if (factor[j - 1] === factor[j]) {
      sameFactorcount++;
    } else {
      divisors *= sameFactorcount + 1;
      sameFactorcount = 1;
    }
  }
  // console.log(divisors);
  return divisors;
}

// 三角数の求め方
// n番目の三角数はTn=n(n+1)/2
function findTrianglerNumber(divisor: number): number {
  let nDivisors = 0;
  let n = 0;
  let trianglerNumber = 1;
  while (nDivisors < divisor) {
    n++;
    trianglerNumber = (n * (n + 1)) / 2;
    nDivisors = countDivisors2(factorizationInPrimeNumbers(trianglerNumber));
  }
  return trianglerNumber;
}

const divisor = 500;
console.log(`${divisor}以上の約数を持つ最初の三角数の値は${findTrianglerNumber(divisor)}です。`);
