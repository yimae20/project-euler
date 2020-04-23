'use strict';

// @ts-ignore
const fs = require('fs');

//同期
const value1: number = fs.readFileSync('./file_a.txt', 'utf-8');
const value2: number = fs.readFileSync('./file_b.txt', 'utf-8');
console.log('同期: ' + value1 * value2);

//非同期
fs.readFile('./file_a.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  const value3 = data;

  fs.readFile('./file_b.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    const value4 = data;
    console.log('非同期: ' + value3 * value4);
  });
});

const readFilePromise = new Promise((resolve, reject) => {
  fs.readFile('...', (err, data) => {
    err ? reject(err) : resolve(data);
  });
})
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
    return Promise.resolve('xxxx');
  })
  .then(() => {});
