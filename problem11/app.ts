'use strict';

import * as fs from 'fs';

const fileName = './grid20-20.txt';
const number = 4;
const columnGrid = 20;
const rowGrid = 20;

function readFile(fileName: string): Promise<string> {
  return new Promise((resolve, rejects) => {
    fs.readFile(fileName, 'utf-8', (err, data) => {
      err ? rejects(err) : resolve(data);
    });
  });
}
readFile(fileName).then((data: string) => {
  const arrayGridNumbers = data
    .split(/ |\r|\n/)
    .filter((value) => value !== '')
    .map((value) => parseInt(value, 10));
  let answer = rowGridProduct(arrayGridNumbers, number);
  if (answer < columnGridProduct(arrayGridNumbers, number)) {
    answer = columnGridProduct(arrayGridNumbers, number);
  }
  if (answer < diagonallyRightDownGridProduct(arrayGridNumbers, number)) {
    answer = diagonallyRightDownGridProduct(arrayGridNumbers, number);
  }
  if (answer < diagonallyLeftDownGridProduct(arrayGridNumbers, number)) {
    answer = diagonallyLeftDownGridProduct(arrayGridNumbers, number);
  }
  console.log(
    `${columnGrid}×${rowGrid}のマス目で、同じ方向（上下左右斜め）に隣接する4つの数字の積の最大値は${answer}です。`
  );
});

function rowGridProduct(arrayGridNumbers: number[], number: number): number {
  let greatestProduct = 0;
  for (let i = 0; i <= rowGrid; i++) {
    for (let j = 0; j <= columnGrid - number; j++) {
      const row = i * 20;
      const product = arrayGridNumbers.slice(j + row, j + row + number).reduce((prev, current) => prev * current, 1);
      if (greatestProduct < product) {
        greatestProduct = product;
      }
    }
  }
  // console.log(greatestProduct);
  return greatestProduct;
}

function columnGridProduct(arrayGridNumbers: number[], number: number): number {
  let greatestProduct = 0;
  for (let i = 0; i <= rowGrid; i++) {
    // スタート行:i
    for (let j = 0; j <= columnGrid - number; j++) {
      // スタート列:j
      let product = 1;
      for (let k = 0; k < number; k++) {
        product *= arrayGridNumbers[i + j * 20 + k * 20];
      }
      if (greatestProduct < product) {
        greatestProduct = product;
      }
    }
  }
  // console.log(greatestProduct);
  return greatestProduct;
}

function diagonallyRightDownGridProduct(arrayGridNumbers: number[], number: number): number {
  let greatestProduct = 0;
  for (let i = 0; i <= rowGrid - number; i++) {
    // スタート行:i
    for (let j = 0; j <= columnGrid - number; j++) {
      // スタート列:j
      let product = 1;
      for (let k = 0; k < number; k++) {
        product *= arrayGridNumbers[j + k + (i + k) * 20];
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

function diagonallyLeftDownGridProduct(arrayGridNumbers: number[], number: number): number {
  let greatestProduct = 0;
  for (let i = 0; i <= rowGrid - number; i++) {
    // スタート行:i
    for (let j = number - 1; j <= columnGrid - 1; j++) {
      // スタート列:j
      let product = 1;
      for (let k = 0; k < number; k++) {
        product *= arrayGridNumbers[j + k + (i - k) * 20];
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
