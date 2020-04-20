'use strict';

function isPalindrome(num: number): boolean {
  const reverseNum = Number(String(num).split('').reverse().join(''));
  return num === reverseNum;
}

type Palindrome = {
  value: number;
  number1: number;
  number2: number;
};

function largestCalc(digit: number): Palindrome {
  const upperLimit = Math.pow(10, digit) - 1; // 999
  const lowerLimit = Math.pow(10, digit - 1); // 100

  let largestPalindrome = 0;

  let palindrome: Palindrome;

  for (let i = upperLimit; i >= lowerLimit; i--) {
    for (let j = i; j >= lowerLimit; j--) {
      const value = i * j;
      if (isPalindrome(value) && largestPalindrome < value) {
        largestPalindrome = value;
        palindrome = {
          value,
          number1: i,
          number2: j,
        };
      }
    }
  }
  return palindrome;
}

let ans = largestCalc(3); //ans[回文, 数字1, 数字2]　 回文=数字1＊数字2
const { value: v, number1: n1, number2: n2 } = ans;
console.log('2つの3桁の数字の積から最大の回文は ' + v + ' = ' + n1 + ' x ' + n2 + ' です。');
