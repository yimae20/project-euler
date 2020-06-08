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

// 発展課題1
// ファイルの読み込み関数を外に出して共通化して使用する

// 発展課題1.1
// どこから実行してもファイルが読み込めるようにする(__dirnameを使用)

// 発展課題2
// 文字コードを使ってアルファベットのスコアを出す。

// 発展課題3
// async/awaitを使う

// ex
// forとforEachをreduceで書き直す

//発展課題1
import { readFile } from '../util/basic';
//発展課題1.1
import * as path from 'path';
const fileName = path.join(__dirname, 'p022_names.txt');

// 文字のスコアを取得（アルファベットのみ）
function getLetterScore(letter: string): number {
  //発展課題2
  const letterScore = letter.toLowerCase().charCodeAt(0) - 96; // 'a'.charCodeAt(0); => 97
  if (letterScore >= 1 && letterScore <= 26) {
    return letterScore;
  } else {
    throw Error('Nameに不正な文字が含まれています。');
  }
}

// 名前のスコアを計算
function calcScore(name: string, namesListNumber: number): number {
  const letterArray = name.split('');
  // ex
  const value = letterArray.reduce((prev, current) => prev + getLetterScore(current), 0);
  return value * namesListNumber;
}

// readFile(fileName).then((data: string) => {・・・});

// 発展課題3
(async (): Promise<void> => {
  const data = await readFile(fileName);
  const namesList = data.replace(/"/g, '').split(',').sort();
  // 全ての名前の合計スコアを計算
  // ex
  const value = namesList.reduce((prev, current, index) => prev + calcScore(current, index + 1), 0);
  console.log(`合計スコアは${value}です。`);
})();
