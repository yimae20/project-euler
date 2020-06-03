/* 
n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!
 */

function factorialDigitSum(endNumber: number): number {
  let ansArray: number[] = [1];
  let digit = 1;

  // 階乗の計算（各桁配列すべてにiを掛ける）
  for (let i = 1; i <= endNumber; i++) {
    ansArray = ansArray.map((x) => x * i);

    // 各桁が10以上になった場合に繰り上げ処理を行う。各桁が10以下になるまで
    while (ansArray.find((num) => num >= 10)) {
      const tmpMap = new Map<number, number>();
      // 繰り上げ処理1
      // 10以上になった桁をtmpMapで記憶する。
      for (let j = 0; j < digit; j++) {
        if (ansArray[j] >= 10) {
          const floor = Math.floor(ansArray[j] / 10);
          tmpMap.set(j, floor);
          ansArray[j] -= floor * 10;
        }
      }
      // 繰り上げ処理2
      tmpMap.forEach((value, key) => {
        ansArray[key + 1] += value;
      });
      if (tmpMap.has(digit - 1)) {
        const carryNumber = tmpMap.get(digit - 1);
        if (typeof carryNumber !== 'undefined') {
          ansArray[digit] = carryNumber;
        }
      }
      digit = ansArray.length;
    }
  }

  // 各桁の和を求める
  const sumDigits = ansArray.reduce((prev, current) => prev + current);
  console.log(ansArray.reverse().join(''));
  return sumDigits;
}

const endNumber = 100;
console.log(`${endNumber}!の各桁の和は${factorialDigitSum(endNumber)}です。`);
