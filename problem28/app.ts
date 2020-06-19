/* 
Starting with the number 1 and moving to the right in 
a clockwise direction a 5 by 5 spiral is formed as follows:

21 22 23 24 25
20  7  8  9 10
19  6  1  2 11
18  5  4  3 12
17 16 15 14 13

It can be verified that the sum of the numbers on the diagonals is 101.

What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?
 */

// 螺旋右上の数字、1^2, 3^2, 5^2, 7^2,9^2,・・・
// 四隅の数字,5*5のとき25,21,17,13 → 5^2, 5^2-(5-1)*1, 5^2-(5-1)*2, 5^2-(5-1)*3
//            n*nのとき              n^2, n^2-(n-1)*1, n^2-(n-1)*2, n^2-(n-1)*3

function sumSpiralDiagonals(limitNumber: number): number {
  let ans = 1;
  for (let n = 3; n <= limitNumber; n += 2) {
    const n2 = Math.pow(n, 2);
    for (let i = 0; i <= 3; i++) {
      ans += n2 - (n - 1) * i;
    }
  }
  return ans;
}

console.log(`1001×1001の螺旋の対角線上の数字の和${sumSpiralDiagonals(1001)}です。`);
