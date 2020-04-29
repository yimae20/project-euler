'use strict';
import * as fs from 'fs';

const fileName = './digit-number.txt';
const digit = 13;

new Promise((resolve, rejects) => {
  fs.readFile(fileName, 'utf-8', (err, data) => {
    err ? rejects(err) : resolve(data); //if (err) {rejects(err)} else {resolve(data)}
  });
})
  .then((data: string) => {
    const arrayDigitNumber = data
      .split('')
      .filter((value) => value !== '\r' && value !== '\n')
      .map((value) => parseInt(value, 10));
    return arrayDigitNumber;
  })
  .then((arrayDigitNumber) => {
    const answer = getGreatestProduct(arrayDigitNumber);
    console.log(`隣接する13桁の数字のうち、積の最も大きいものは ${answer} です。`);
  });

function getGreatestProduct(arrayDigitNumber: number[]): number {
  //すべての隣接する指定桁の数字の積を計算し、最大値をanswerに代入する。（改善できるかも・・・）
  const maxArray = arrayDigitNumber.length - digit;
  let answer = 0;
  for (let i = 0; i <= maxArray; i++) {
    const multiNumber = arrayDigitNumber.slice(i, i + digit).reduce((prev, current) => prev * current, 1);
    if (answer < multiNumber) {
      answer = multiNumber;
    }
  }
  return answer;
}
