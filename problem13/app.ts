import * as fs from 'fs';

const fileName = '50-digit-numbers.txt';
const firstDigits = 10;

function readFile(fileName: string): Promise<string> {
  return new Promise((resolve, rejects) => {
    fs.readFile(fileName, 'utf-8', (err, data) => {
      err ? rejects(err) : resolve(data);
    });
  });
}

readFile(fileName).then((data: string) => {
  const arrayData = data.split(/\r|\n/).filter((value) => value !== '');
  const numberOfLines = arrayData.length; //数値の数（行数）
  const digitNumber = arrayData[0].split('').map((value) => parseInt(value, 10)).length; //数値の桁数
  const sumNumbers: number[] = [];
  for (let i = 0; i <= numberOfLines - 1; i++) {
    for (let j = 0; j <= digitNumber - 1; j++) {
      //数値を配列に代入しreverseする
      const arrayNumbers = arrayData[i]
        .split('')
        .map((value) => parseInt(value, 10))
        .reverse();
      //各桁で和を求める
      if (isNaN(sumNumbers[j]) === true) {
        sumNumbers[j] = arrayNumbers[j];
      } else {
        sumNumbers[j] += arrayNumbers[j];
      }
      //各桁の和が10を超えた場合、繰り上げ処理を行う
      if (sumNumbers[j] >= 10) {
        if (isNaN(sumNumbers[j + 1]) === true) {
          sumNumbers[j + 1] = 1;
        } else {
          sumNumbers[j + 1]++;
        }
        sumNumbers[j] -= 10;
      }
    }
  }
  const ans = sumNumbers.reverse().join(''); //すべての和
  const ans2 = ans.split('').slice(0, firstDigits).join(''); //和の最初の10桁
  console.log(`読み込んだファイルの数値の和の最初の${firstDigits}桁は ${ans2} です。`);
});
