'use strict';

function palindromeModeCheck(num: number) {
  const numLength = String(num).length;
  const x = String(num).split('');
  const y = Math.floor(numLength / 2);
  let tof = true;
  for (let i = 0; i < y; i++) {
    if (x[0 + i] === x[numLength - 1 - i]) {
    } else {
      tof = false;
      return 0;
    }
  }
  return num;
}

function largestCalc(ketasu: number) {
  const lim1 = 10 ** ketasu - 1;
  const lim2 = lim1 - 10 ** (ketasu - 1);
  let num1 = 0;
  let num2 = 0;
  let largestPalindromeMode = 0;
  for (let i = lim1; i >= lim2; i--) {
    for (let j = lim1; j >= lim2; j--) {
      const ans = palindromeModeCheck(i * j);
      // console.log(ans);
      if (ans > 0 && ans > largestPalindromeMode) {
        largestPalindromeMode = ans;
        num1 = i;
        num2 = j;
      }
    }
  }
  console.log('2つの3桁の数字の積から最大の回文は ' + largestPalindromeMode + ' = ' + num1 + ' x ' + num2 + ' です。');
}

largestCalc(3);
