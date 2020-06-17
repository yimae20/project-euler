/* 
A unit fraction contains 1 in the numerator. 
The decimal representation of the unit fractions with denominators 2 to 10 are given:

1/2	= 	0.5
1/3	= 	0.(3)
1/4	= 	0.25
1/5	= 	0.2
1/6	= 	0.1(6)
1/7	= 	0.(142857)
1/8	= 	0.125
1/9	= 	0.(1)
1/10	= 	0.1
Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. 
It can be seen that 1/7 has a 6-digit recurring cycle.

Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.
 */

import { isPrimeFactor } from '../util/Math';

// 循環小数の長さを計算
// 手計算と同じ方法：1/d mod x => 10x/d mod y => 10y/d mod z => ・・・
function recurringDecimalCount(numerator: number, denominator: number): number {
  let count = 0;
  let remainder = numerator % denominator;
  const tmpArr: number[] = [];
  while (remainder !== 0) {
    // tmpArrに今回の余りと同じ数字が存在すれば循環小数の終端と判断し、countを返す
    if (tmpArr.find((element) => element === remainder)) {
      count -= tmpArr.indexOf(remainder);
      return count;
    }
    // 余りをtmpArrに格納
    tmpArr.push(remainder);
    numerator = remainder * 10;
    remainder = numerator % denominator;
    count++;
  }
  // 割り切れる数なら循環小数なしのため、countは0を返す
  return (count = 0);
}

// 最長の循環小数を持つ整数を求める
function largestRecurringDecimal(limitNumber: number): number {
  let largestCount = 0;
  let ansNum = 0;
  for (let i = 2; i <= limitNumber; i++) {
    // 素数のみ計算
    if (isPrimeFactor(i)) {
      const iLength = String(i).length;
      const iCount = recurringDecimalCount(iLength * 10, i);
      if (largestCount < iCount) {
        largestCount = iCount;
        ansNum = i;
      }
    }
  }
  return ansNum;
}
console.log(`1000以下で最長の循環小数を持つ整数は ${largestRecurringDecimal(1000)} です。`);
