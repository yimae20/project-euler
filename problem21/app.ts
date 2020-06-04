/* 
Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.
 */

//  素数判定
function isPrimeFactor(number: number): boolean {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// 約数配列の取得(1を含む)
function getDivisors(number: number): number[] {
  const divisorsArr: number[] = [];
  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      divisorsArr.push(i);
    }
  }
  return divisorsArr;
}

// 友愛数配列の取得
function getAmicableNumbers(endNumber: number): Map<number, number> {
  const tmpMap: Map<number, number> = new Map();
  const amicableNumbersMap: Map<number, number> = new Map();
  for (let i = 2; i <= endNumber; i++) {
    if (!isPrimeFactor(i)) {
      const sumDivisors = getDivisors(i).reduce((prev, current) => {
        return prev + current;
      });
      tmpMap.set(i, sumDivisors);
    }
  }
  tmpMap.forEach((value, key) => {
    // d(a) = b,       d(b) = a,       a != b
    // d(key) = value, d(value) = key, key != value

    // 友愛数Map<a,b>が見つかったらsetして、Map<b,a>を削除
    if (tmpMap.get(value) === key && key !== value) {
      amicableNumbersMap.set(key, value);
      tmpMap.delete(value);
    }
  });
  console.log(amicableNumbersMap);
  return amicableNumbersMap;
}

// 友愛数の和を計算
function sumAmicableNumbers(endNumber: number): number {
  const amicableNumbers = getAmicableNumbers(endNumber);
  let sumNumbers = 0;
  amicableNumbers.forEach((value, key) => {
    sumNumbers += key + value;
  });
  return sumNumbers;
}

const endNumber = 10000;
console.log(`${endNumber}以下の友愛数の和は${sumAmicableNumbers(endNumber)}です。`);
