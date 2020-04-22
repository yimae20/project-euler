'use strict';

//同期処理と非同期処理について(readFileとreadFileSyncの違い)

// @ts-ignore
const fs = require('fs');

const text = fs.readFileSync('./popu-pref.csv', 'utf-8');
console.log(text);
console.log('readFileSyncは同期処理のため、ファイル読み込み完了後このコメントが表示される');

fs.readFile('./popu-pref.csv', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
console.log('readFileは非同期処理のため、ファイル読み込みを待たずにこのコメントが表示される');
