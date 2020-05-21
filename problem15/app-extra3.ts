// 発展課題3
// (第1引数の積) ÷ (第2引数の積) の計算結果を返すような関数を作成する
// ex1) calc([4, 12], [3, 2])  =>  (4 x 12) / (3 x 2) => 48 / 6  => 8
// ライブラリ「lodash」を使って実装する。
// lodashの関数を使った場合と使わなかった場合の実行速度の差を測定する(実行回数10000回ずつ)
const startTime = Date.now();

import * as lodash from 'lodash';

// 素因数分解
function factorizationInPrimeNumbers(value: number): number[] {
  const factors: number[] = [];
  let tmpValue = value;
  let i = 2;
  while (i <= Math.sqrt(tmpValue)) {
    if (tmpValue % i === 0) {
      factors.push(i);
      tmpValue /= i;
      i = 1;
    }
    i++;
  }
  factors.push(tmpValue);
  return factors;
}

function calc(numerator: number[], denominator: number[]): number {
  const numeratorLength = numerator.length;
  const denominatorLength = denominator.length;
  let numeratorPrimes: number[] = [];
  let denominatorPrimes: number[] = [];

  // 分母分子のそれぞれの配列に対して素因数分解をする
  for (let i = 0; i < numeratorLength; i++) {
    const primes = factorizationInPrimeNumbers(numerator[i]);
    numeratorPrimes = lodash.concat(numeratorPrimes, primes);
  }
  for (let i = 0; i < denominatorLength; i++) {
    const primes = factorizationInPrimeNumbers(denominator[i]);
    denominatorPrimes = lodash.concat(denominatorPrimes, primes);
  }
  const denominatorPrimesLength = denominatorPrimes.length;

  //約分処理
  //分母と分子を比較して、同じ値があれば1を代入して約分する
  for (let i = 0; i < denominatorPrimesLength; i++) {
    const index = lodash.findIndex(numeratorPrimes, (item) => item === denominatorPrimes[i]);
    if (index !== -1) {
      numeratorPrimes.splice(index, 1, 1);
      denominatorPrimes.splice(i, 1, 1);
    }
  }

  // 分母分子それぞれに対し、配列内の積を求める
  let ansNumerator = 0;
  const tmpNumerator = lodash.reduce(numeratorPrimes, (prev, current) => {
    return prev * current;
    // return lodash.multiply(prev, current);
  });
  if (typeof tmpNumerator !== 'undefined') {
    ansNumerator = tmpNumerator;
  }
  let ansDenominator = 0;
  const tmpDenominator = lodash.reduce(denominatorPrimes, (prev, current) => {
    return prev * current;
    // return lodash.multiply(prev, current);
  });
  if (typeof tmpDenominator !== 'undefined') {
    ansDenominator = tmpDenominator;
  }

  // 答えを求める
  const ans = ansNumerator / ansDenominator;
  return ans;
}

const numerator = [
  2090129990203125,
  457890338846655,
  8344143570276800,
  1582464633164800,
  349735430539390,
  3607542400000000,
];

const denominator = [1830101, 286452465, 4109105700, 475, 562047322471580, 2401451388, 3704443359375000, 2238742];

// const numerator = [4, 12];
// const denominator = [3, 2];

for (let i = 1; i <= 100000; i++) {
  calc(numerator, denominator);
}
const endTime = Date.now();
const calcTime = Math.round((endTime / 1000 - startTime / 1000) * 1000) / 1000;
console.log(`計算時間：${calcTime}秒`);

// console.log(calc(numerator, denominator));
