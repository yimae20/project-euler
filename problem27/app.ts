/* 
Euler discovered the remarkable quadratic formula:

n2+n+41
It turns out that the formula will produce 40 primes for the consecutive integer values 0≤n≤39. 
However, when n=40,402+40+41=40(40+1)+41 is divisible by 41, 
and certainly when n=41,412+41+41 is clearly divisible by 41.

The incredible formula n2−79n+1601 was discovered, 
which produces 80 primes for the consecutive values 0≤n≤79. 
The product of the coefficients, −79 and 1601, is −126479.

Considering quadratics of the form:

n2+an+b, where |a|<1000 and |b|≤1000

where |n| is the modulus/absolute value of n
e.g. |11|=11 and |−4|=4
Find the product of the coefficients, a and b, for the quadratic expression that 
produces the maximum number of primes for consecutive values of n, starting with n=0.
 */

import { isPrime } from '../util/Math';

// limitNumberまでの素数を配列に代入する関数
function getPrimesArray(limitNumber: number): number[] {
  const ansArray = [];
  for (let i = 2; i <= limitNumber; i++) {
    if (isPrime(i)) {
      ansArray.push(i);
    }
  }
  return ansArray;
}

// 連続したnの最大値を求める関数
function getQuadraticPrimesN(a: number, b: number): number {
  if (!isPrime(b)) return 0;
  let n = 0;
  let value = b;
  while (isPrime(value)) {
    n++;
    value = Math.pow(n, 2) + a * n + b;
  }
  return n - 1;
}

// a,bの条件
// a: 整数であればどの数字でも良い
// b: 素数（n=0を満たす必要があるため）
// あとは強引に全ての組み合わせを計算する
// 連続したnが最大となるa,bの組み合わせを探し、積(a*b)を返す
function quadraticPrimesEquationAB(limitAbsoluteA: number, limitB: number): number {
  let ansA = 0;
  let ansB = 0;
  let ansN = 0;
  const arrayB = getPrimesArray(limitB);
  const arrayBLength = arrayB.length;
  for (let i = 0; i < arrayBLength; i++) {
    for (let a = -1 * limitAbsoluteA + 1; a < limitAbsoluteA; a++) {
      const n = getQuadraticPrimesN(a, arrayB[i]);
      if (n > ansN) {
        ansA = a;
        ansB = arrayB[i];
        ansN = n;
      }
    }
  }
  console.log(ansA, ansB, ansN);
  return ansA * ansB;
}

console.log(
  `素数生成式n^2+a*n+b (|a|< 1000、|b|<= 1000)でnが最大の時の積a*bは${quadraticPrimesEquationAB(1000, 1000)}です。`
);
