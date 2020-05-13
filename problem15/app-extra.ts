// 発展課題
// x!やy!が大きくなったとき64bitに収まらない値となるため、
// 64bitを超えないように計算ロジックを変更する

// → 組み合わせ(C:combination)を使う ＋ for loop中に都度解答を計算することで、64bitを超えないようにした

// 順列の公式
// x*yマスの場合
// (x+y)!/(x!*y!)
// 40C20

function calcRoutes(x: number, y: number): number {
  let denominator = 1;
  let answer = 1;
  for (let i = x + 1; i <= x + y; i++) {
    answer = (answer * i) / denominator;
    denominator++;
  }
  return answer;
}

const x = 20;
const y = 20;
console.log(`${x}×${y}マスの順路の総数は ${calcRoutes(x, y)} です。`);
