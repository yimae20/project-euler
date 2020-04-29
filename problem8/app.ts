'use strict';

function greatestProduct(fileName: string, digit: number): number {
  // @ts-ignore
  const fs = require('fs');
  const number = fs.readFileSync(fileName, 'utf-8');
  const arrayDigitNumber = number
    .split('')
    .filter((value) => value !== '\r')
    .filter((value) => value !== '\n');

  //すべての隣接する13桁の数字の積を計算し、最大値をanswerに代入する。（改善できるかも・・・）
  const maxArray = arrayDigitNumber.length - digit;
  let answer = 0;
  for (let j = 0; j <= maxArray; j++) {
    let multiNumber = 1;
    for (let i = 0; i < digit; i++) {
      multiNumber *= arrayDigitNumber[j + i];
    }
    // console.log(multiNumber);
    if (answer < multiNumber) {
      answer = multiNumber;
    }
  }
  return answer;
}

console.log(`隣接する13桁の数字のうち、積の最も大きいものは ${greatestProduct('./digit-number.txt', 13)} です。`);
