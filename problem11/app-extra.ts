'use strict';

import * as fs from 'fs';

const fileName = './grid20-20.txt';
const number = 4;

function readFile(fileName: string): Promise<string> {
  return new Promise((resolve, rejects) => {
    fs.readFile(fileName, 'utf-8', (err, data) => {
      err ? rejects(err) : resolve(data);
    });
  });
}

function validate(value: string[][]): void {
  // ---
  // NG : throw Include invalid value
  //    : throw Not grid
  // ---
}

function parse(data: string): number[][] {
  const arrayData = data.split(/\r|\n/).filter((value) => value !== '');
  const arrArrData = arrayData.map((arr) => arr.split(' '));

  validate(arrArrData);

  return arrArrData.map((arrData) => arrData.map((v) => parseInt(v, 10)));
}

readFile(fileName).then((data: string) => {
  /*   const arrayData = data.split(/\r|\n/).filter((value) => value !== '');
  let arrayGridNumbers: number[][] = [];
  const columnLength = arrayData.length;
  const rowLength = arrayData[0]
    .split(' ')
    .map((value) => parseInt(value, 10))
    .filter((value) => !isNaN(value)).length;
  for (let i = 0; i <= columnLength - 1; i++) {
    arrayGridNumbers[i] = arrayData[i]
      .split(' ')
      .map((value) => {
        const parsed = parseInt(value, 10);
        if (!isNaN(parsed)) {
          throw Error("不正な値が入っています")
        }
        return parsed;
      })
//      .filter((value) => !isNaN(value));
    console.log(arrayGridNumbers[i]);
    if (arrayGridNumbers[i].length !== rowLength) {
      throw Error('読み込んだファイルはグリッド状になっていません。');
    }
  }
 */

  const arrayGridNumbers = parse(data);

  let answer = rowGridProduct(arrayGridNumbers, number);
  if (answer < columnGridProduct(arrayGridNumbers, number, rowLength, columnLength)) {
    answer = columnGridProduct(arrayGridNumbers, number, rowLength, columnLength);
  }
  if (answer < diagonallyRightDownGridProduct(arrayGridNumbers, number, rowLength, columnLength)) {
    answer = diagonallyRightDownGridProduct(arrayGridNumbers, number, rowLength, columnLength);
  }
  if (answer < diagonallyLeftDownGridProduct(arrayGridNumbers, number, rowLength, columnLength)) {
    answer = diagonallyLeftDownGridProduct(arrayGridNumbers, number, rowLength, columnLength);
  }
  console.log(
    `${rowLength}×${columnLength}のマス目で、同じ方向（上下左右斜め）に隣接する4つの数字の積の最大値は${answer}です。`
  );
});

function rowGridProduct(arrayGridNumbers: number[][], number: number): number {
  if (arrayGridNumbers.length == 0) {
    return 0;
  }
  const columnLength = arrayGridNumbers[0].length;
  const rowLength = arrayGridNumbers.length;

  let greatestProduct = 0;
  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j <= columnLength - number; j++) {
      let product = 1;
      for (let k = 0; k < number; k++) {
        product *= arrayGridNumbers[i][j + k];
      }
      // const product = arrayGridNumbers.slice(j + row, j + row + number).reduce((prev, current) => prev * current, 1);
      if (greatestProduct < product) {
        greatestProduct = product;
      }
    }
  }
  // console.log(greatestProduct);
  return greatestProduct;
}

function columnGridProduct(
  arrayGridNumbers: number[][],
  number: number,
  rowLength: number,
  columnLength: number
): number {
  let greatestProduct = 0;
  for (let i = 0; i <= rowLength - number; i++) {
    // スタート行:i
    for (let j = 0; j < columnLength; j++) {
      // スタート列:j
      let product = 1;
      for (let k = 0; k < number; k++) {
        product *= arrayGridNumbers[i + k][j];
      }
      if (greatestProduct < product) {
        greatestProduct = product;
      }
    }
  }
  // console.log(greatestProduct);
  return greatestProduct;
}

function diagonallyRightDownGridProduct(
  arrayGridNumbers: number[][],
  number: number,
  rowLength: number,
  columnLength: number
): number {
  let greatestProduct = 0;
  for (let i = 0; i <= rowLength - number; i++) {
    // スタート行:i
    for (let j = 0; j <= columnLength - number; j++) {
      // スタート列:j
      let product = 1;
      for (let k = 0; k < number; k++) {
        product *= arrayGridNumbers[i + k][j + k];
      }
      // .reduce((prev, current) => prev * current, 1);
      if (greatestProduct < product) {
        greatestProduct = product;
      }
    }
  }
  // console.log(greatestProduct);
  return greatestProduct;
}

function diagonallyLeftDownGridProduct(
  arrayGridNumbers: number[][],
  number: number,
  rowLength: number,
  columnLength: number
): number {
  let greatestProduct = 0;
  for (let i = number - 1; i < rowLength; i++) {
    // スタート行:i
    for (let j = 0; j <= columnLength - number; j++) {
      // スタート列:j
      let product = 1;
      for (let k = 0; k < number; k++) {
        product *= arrayGridNumbers[i - k][j + k];
      }
      if (greatestProduct < product) {
        greatestProduct = product;
      }
    }
  }
  // console.log(greatestProduct);
  return greatestProduct;
}
