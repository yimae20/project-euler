/* 
Using names.txt (right click and 'Save Link/Target As...'), 
a 46K text file containing over five-thousand first names, 
begin by sorting it into alphabetical order. 
Then working out the alphabetical value for each name, 
multiply this value by its alphabetical position in the list to obtain a name score.

For example, when the list is sorted into alphabetical order, COLIN, 
which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list.
So, COLIN would obtain a score of 938 × 53 = 49714.

What is the total of all the name scores in the file?
 */

import * as fs from 'fs';
const fileName = 'p022_names.txt';

// ファイルの読み込み
function readFile(fileName: string): Promise<string> {
  return new Promise((resolve, rejects) => {
    fs.readFile(fileName, 'utf-8', (err, data) => {
      err ? rejects(err) : resolve(data);
    });
  });
}

// 文字のスコアを取得（アルファベットのみ）
function getLetterScore(letter: string): number {
  const lowerCaseLetter = letter.toLowerCase();
  switch (lowerCaseLetter) {
    case 'a':
      return 1;
    case 'b':
      return 2;
    case 'c':
      return 3;
    case 'd':
      return 4;
    case 'e':
      return 5;
    case 'f':
      return 6;
    case 'g':
      return 7;
    case 'h':
      return 8;
    case 'i':
      return 9;
    case 'j':
      return 10;
    case 'k':
      return 11;
    case 'l':
      return 12;
    case 'm':
      return 13;
    case 'n':
      return 14;
    case 'o':
      return 15;
    case 'p':
      return 16;
    case 'q':
      return 17;
    case 'r':
      return 18;
    case 's':
      return 19;
    case 't':
      return 20;
    case 'u':
      return 21;
    case 'v':
      return 22;
    case 'w':
      return 23;
    case 'x':
      return 24;
    case 'y':
      return 25;
    case 'z':
      return 26;
  }
  throw Error('Nameに不正な文字が含まれています。');
}

// 名前のスコアを計算
function calcScore(name: string, namesListNumber: number): number {
  const letterArray = name.split('');
  let value = 0;
  letterArray.forEach((letter: string) => {
    value += getLetterScore(letter);
  });
  return value * namesListNumber;
}

readFile(fileName).then((data: string) => {
  // 名前をアルファベット順に並べ替えて配列に格納する
  const namesList = data.replace(/"/g, '').split(',').sort();
  const listLength = namesList.length;
  let value = 0;
  // 全ての名前の合計スコアを計算
  for (let i = 1; i <= listLength; i++) {
    value += calcScore(namesList[i - 1], i);
  }
  console.log(`${fileName} の合計スコアは${value}です。`);
});
