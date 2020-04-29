'use strict';

function differenceSquare(firstTerm: number, commonDifference: number, termNumber: number): number {
  //汎用性を考えて、自然数の和の公式ではなく、等差数列の和の公式を用いて計算

  // 等差数列の和
  // S = 1/2*n*(2*a + (n-1)*d)
  // 初項(firstTerm):a,公差(commonDifference):d,項数(termNumber):n

  // 自然数の和
  // S = 1/2 * n *(n+1)
  const sumNumber = (1 / 2) * termNumber * (2 * firstTerm + (termNumber - 1) * commonDifference); //公差数列の和
  const sumSquare = Math.pow(sumNumber, 2); //公差数列の和の2乗

  let squareSum = 0; //公差数列の2乗の和
  const lastNumber = firstTerm + (termNumber - 1) * commonDifference; //最終項の数値

  for (let i = firstTerm; i <= lastNumber; i += commonDifference) {
    squareSum += Math.pow(i, 2);
  }
  return sumSquare - squareSum;
}

//                                                     ${differenceSquare(初項、公差、項数))}
console.log(`最初の100個の自然数の2乗の和と和の2乗の差は ${differenceSquare(1, 1, 100)} です。`);
