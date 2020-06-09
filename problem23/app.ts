/* 
A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. 
For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, 
which means that 28 is a perfect number.

A number n is called deficient if the sum of its proper divisors is 
less than n and it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, 
the smallest number that can be written as the sum of two abundant numbers is 24. 
By mathematical analysis, it can be shown that all integers greater than 28123 can 
be written as the sum of two abundant numbers. However, this upper limit cannot 
be reduced any further by analysis even though it is known that the greatest number that 
cannot be expressed as the sum of two abundant numbers is less than this limit.

Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
 */

import { getDivisors } from '../util/Math';

// limitNumber以下の過剰数を配列に格納
// 過剰数の最小は12
function getAbundantNumbersArray(limitNumber: number): number[] {
  const abundantNumbersArray: number[] = [];
  for (let i = 12; i <= limitNumber; i++) {
    if (i < getDivisors(i).reduce((prev, current) => prev + current)) {
      abundantNumbersArray.push(i);
    }
  }
  return abundantNumbersArray;
}

// 過剰数の2つの和でnumberが表現できるか確認（numberが偶数でも奇数でも確認できる）
function isSumOfTwoAbundantNumbers(abundantNumbersArray: number[], number: number): boolean {
  const tmpArray = abundantNumbersArray.filter((value) => value <= number - 12);
  const tmpArrayLength = tmpArray.length;
  for (let i = 0; i < tmpArrayLength; i++) {
    for (let j = 0; j < tmpArrayLength; j++) {
      if (number === tmpArray[i] + tmpArray[j]) {
        return true;
      }
    }
  }
  return false;
}

// 過剰数の2つの和でnumberが表現できるか確認（numberが奇数のときのみ）
// 奇数の過剰数は少ないためfilterで配列を小さくして計算時間を減らす
// 奇数 ＝ 奇数[i]＋偶数[j]
function isSumOfTwoAbundantNumbers2(abundantNumbersArray: number[], number: number): boolean {
  const oddArray = abundantNumbersArray.filter((value) => value % 2 !== 0 && value <= number - 12);
  const evenArray = abundantNumbersArray.filter((value) => value % 2 === 0 && value <= number - 12);
  const oddArrayLength = oddArray.length;
  const evenArrayLength = evenArray.length;

  for (let i = 0; i < oddArrayLength; i++) {
    for (let j = 0; j < evenArrayLength; j++) {
      if (number === oddArray[i] + evenArray[j]) {
        return true;
      }
    }
  }
  return false;
}

// 過剰数の和で表現できない数の合計値を計算
function calc(limitNumber: number): number {
  let sumValue = 0;
  const abundantNumbersArray = getAbundantNumbersArray(limitNumber);
  for (let i = 1; i <= limitNumber; i++) {
    // iが偶数のとき
    if (i % 2 === 0) {
      if (!isSumOfTwoAbundantNumbers(abundantNumbersArray, i)) {
        sumValue += i;
      }
      // iが奇数のとき
    } else {
      if (!isSumOfTwoAbundantNumbers2(abundantNumbersArray, i)) {
        sumValue += i;
      }
    }
  }
  return sumValue;
}

// 過剰数の和で表現できない数は28123以下しかない
const limitNumber = 28123;
console.log(`過剰数の2つの和で表現できない正の整数の和は${calc(limitNumber)}です。`);
