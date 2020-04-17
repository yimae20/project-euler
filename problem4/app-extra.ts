'use strict';

function isPalindrome(num: number): boolean {
  type calc = {
    reverseNum: number;
    trueOrFalse: boolean;
  };
  const reverseNum = Number(String(num).split('').reverse().join(''));
  let trueOrFalse = true;
  if (num === reverseNum) {
    return trueOrFalse;
  } else {
    return (trueOrFalse = false);
  }
}

function largestCalc(digit: number): number[] {
  type calc = {
    upperLimit: number;
    lowerLimit: number;
    largestPalindrome: number;
    num1: number;
    num2: number;
  };
  const upperLimit = Math.pow(10, digit) - 1;
  const lowerLimit = upperLimit - Math.pow(10, digit - 1);
  let largestPalindrome = 0;
  let num1 = 0;
  let num2 = 0;

  for (let i = upperLimit; i >= lowerLimit; i--) {
    for (let j = upperLimit; j >= lowerLimit; j--) {
      if (isPalindrome(i * j) === true && largestPalindrome < i * j) {
        largestPalindrome = i * j;
        num1 = i;
        num2 = j;
      }
    }
  }
  let ans: number[] = [largestPalindrome, num1, num2];
  return ans;
}

let ans: number[] = largestCalc(3); //ans[回文, 数字1, 数字2]　 回文=数字1＊数字2
console.log('2つの3桁の数字の積から最大の回文は ' + ans[0] + ' = ' + ans[1] + ' x ' + ans[2] + ' です。');
