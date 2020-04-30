// 500個の約数をもつtriangularNumberを探そうとすると計算量が多すぎて終わらない・・・
/*function countDivisors(triangularNumber: number): number {
  let divisors = 2; // 1とtriangularNumberを約数として最初からカウントしておく
  for (let i = 2; i <= Math.floor(triangularNumber / 2); i++) {
    if (triangularNumber % i === 0) {
      divisors++;
    }
  }
  return divisors;
}
*/

// 約数の個数の求め方
// N = p^k * q^l * r^m
// (k + 1)(l + 1)(m + 1)
function factorizationInPrimeNumbers(triangularNumber: number): number[] {
  let num = triangularNumber;
  let factors: number[] = [];
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      factors = [...factors, i];
      num /= i;
      i = 1;
    }
  }
  return (factors = [...factors, num]);
}

function countDivisors2(factor: number[]): number {
  const length = factor.length;
  let divisors = 1;
  let sameFactorCount = 1;
  for (let j = 1; j <= length; j++) {
    if (factor[j - 1] === factor[j]) {
      sameFactorCount++;
    } else {
      divisors *= sameFactorCount + 1;
      sameFactorCount = 1;
    }
  }
  // console.log(divisors);
  return divisors;
}

// 三角数の求め方
// n番目の三角数はTn=n(n+1)/2
function findTriangularNumber(divisor: number): number {
  let nDivisors = 0;
  let n = 0;
  let triangularNumber = 1;
  while (nDivisors < divisor) {
    n++;
    triangularNumber = (n * (n + 1)) / 2;
    nDivisors = countDivisors2(factorizationInPrimeNumbers(triangularNumber));
  }
  return triangularNumber;
}

const divisor = 500;
console.log(`${divisor}以上の約数を持つ最初の三角数の値は${findTriangularNumber(divisor)}です。`);
