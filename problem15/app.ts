// 階乗の計算
function factorial(number: number): number {
  let answer = 1;
  for (let i = 2; i <= number; i++) {
    answer *= i;
  }
  return answer;
}

// 順列の公式
// x*yマスの場合
// (x+y)!/(x!*y!)

// x*yマスの順路の総数の計算
function calcRoutes(x: number, y: number): number {
  return factorial(x + y) / (factorial(x) * factorial(y));
}

const x = 20;
const y = 20;
console.log(`${x}×${y}マスの順路の総数は ${calcRoutes(x, y)} です。`);
