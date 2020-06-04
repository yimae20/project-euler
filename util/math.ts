//  素数判定
export function isPrimeFactor(number: number): boolean {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
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
