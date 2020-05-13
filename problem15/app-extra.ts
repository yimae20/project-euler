// 発展課題
// x!やy!が大きくなったとき64bitに収まらない値となるため、
// 64bitを超えないように計算ロジックを変更する

// →

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

const s = factorial(40);
const t = 815915283247897734345611269596115894272000000000;
const u = 815915283247897734345611269596115894272000000001;

console.log(s === t);
console.log(t === u);
console.log(u === s);
console.log(s);
console.log(t);
console.log(u);
