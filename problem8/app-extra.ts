'use strict';
import * as fs from 'fs';

function greatestProduct(fileName: string, digit: number): number {
  const number = fs.readFileSync(fileName, 'utf-8');
  const arrayDigitNumber: number[] = number
    .split('')
    .filter((value) => value !== '\r' && value !== '\n')
    .map((value) => parseInt(value, 10));

  //すべての隣接する指定桁の数字の積を計算し、最大値をanswerに代入する。（改善できるかも・・・）
  const maxArray = arrayDigitNumber.length - digit;
  let answer = 0;
  for (let i = 0; i <= maxArray; i++) {
    const multiNumber = arrayDigitNumber.slice(i, i + digit).reduce((prev, current) => prev * current, 1);
    // }
    // console.log(multiNumber);
    if (answer < multiNumber) {
      answer = multiNumber;
    }
  }
  return answer;
}

console.log(`隣接する13桁の数字のうち、積の最も大きいものは ${greatestProduct('./digit-number.txt', 13)} です。`);
