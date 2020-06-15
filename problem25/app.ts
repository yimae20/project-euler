/* 
The Fibonacci sequence is defined by the recurrence relation:

Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
Hence the first 12 terms will be:

F1 = 1
F2 = 1
F3 = 2
F4 = 3
F5 = 5
F6 = 8
F7 = 13
F8 = 21
F9 = 34
F10 = 55
F11 = 89
F12 = 144
The 12th term, F12, is the first term to contain three digits.

What is the index of the first term in the Fibonacci sequence to contain 1000 digits?
 */

import { largeDigitSum } from '../util/Math';

function fibonacciNumbers(number: number): number {
  let fibN = [1];
  let fibN1 = [1];
  let fibN2 = [0];
  let digits = fibN.length;
  let count = 2;
  while (digits <= number - 1) {
    // console.log(count);
    // console.log(fibN);
    // console.log(fibN1);
    // console.log(fibN2);
    const x = fibN1;
    fibN = largeDigitSum(fibN, fibN1);
    fibN1 = largeDigitSum(fibN1, fibN2);
    fibN2 = x;
    digits = fibN.length;
    count++;
  }
  // console.log(fibN.join(''));
  return count;
}
console.log(`フィボナッチ数列で最初に1000桁となる項はF_${fibonacciNumbers(1000)}です。`);
