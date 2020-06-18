//  素数判定
export function isPrime(number: number): boolean {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number < 2 ? false : true;
}

// 約数配列の取得(1を含む)
export function getDivisors(number: number): number[] {
  const divisorsArr: number[] = [];
  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      divisorsArr.push(i);
    }
  }
  return divisorsArr;
}

// 階乗の計算
export function factorial(number: number): number {
  let ans = 1;
  for (let i = 1; i <= number; i++) {
    ans *= i;
  }
  return ans;
}

// 桁数の大きい足し算
export function largeDigitSum(number1: number[], number2: number[]): number[] {
  const numberA = number1.concat().reverse();
  const numberB = number2.concat().reverse();
  const largeDigit = numberA.length >= numberB.length ? numberA.length : numberB.length;
  const sumNumber: number[] = [];
  // const tmpMap = new Map();
  for (let i = 0; i < largeDigit; i++) {
    //各桁で和を求める
    if (isNaN(numberA[i])) {
      sumNumber.push(numberB[i]);
    } else if (isNaN(numberB[i])) {
      sumNumber.push(numberA[i]);
    } else {
      sumNumber.push(numberA[i] + numberB[i]);
    }
  }
  for (let i = 0; i < largeDigit; i++) {
    //各桁の和が10を超えた場合、繰り上げ処理を行う
    if (sumNumber[i] >= 10) {
      isNaN(sumNumber[i + 1]) ? (sumNumber[i + 1] = 1) : sumNumber[i + 1]++;
      sumNumber[i] -= 10;
    }
  }
  return sumNumber.reverse();
}
