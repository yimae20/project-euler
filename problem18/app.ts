/* 
By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.

3
7 4
2 4 6
8 5 9 3

That is, 3 + 7 + 4 + 9 = 23.

Find the maximum total from top to bottom of the triangle below:

75
95 64
17 47 82
18 35 87 10
20 04 82 47 65
19 01 23 75 03 34
88 02 77 73 07 63 67
99 65 04 28 06 16 70 92
41 41 26 56 83 40 80 70 33
41 48 72 33 47 32 37 16 94 29
53 71 44 65 25 43 91 52 97 51 14
70 11 33 28 77 73 17 78 39 68 17 57
91 71 52 38 17 14 91 43 58 50 27 29 48
63 66 04 68 89 53 67 30 73 16 69 87 40 31
04 62 98 27 23 09 70 98 73 93 38 53 60 04 23 

NOTE: As there are only 16384 routes, it is possible to solve this problem by trying every route. 
However, Problem 67, is the same challenge with a triangle containing one-hundred rows; 
it cannot be solved by brute force, and requires a clever method! ;o)
*/

import * as fs from 'fs';
const fileName = './problem18/number-triangle.txt';

// ファイルの読み込み
function readFile(fileName: string): Promise<string> {
  return new Promise((resolve, rejects) => {
    fs.readFile(fileName, 'utf-8', (err, data) => {
      err ? rejects(err) : resolve(data);
    });
  });
}

readFile(fileName).then((data: string) => {
  // 読み込んだファイルのデータを配列に格納
  const arrData = data.split(/\r|\n/).filter((value) => value !== '');
  const arrArrData = arrData.map((arr) => arr.split(' '));
  const length = arrArrData.length;
  let sumArr: number[] = arrArrData[0].map(Number);
  /*
  最大値を出すアルゴリズム(problem67も1秒未満で答えが出せる)
  i行目の数値にi-1行目までの合計を足して、最大値の配列を作成 
  例)
  3
  7 4
  2 4 6 
  8 5 9 3

  i = 1 → [10 7]
  i = 2 → [10+2,max(10+4,7+4),7+6] → [12,14,13]
  i = 3 → [12+8,max(12+5,14+5),max(14+9,13+9),13+3] → [20,19,23,16]
  max([20,19,23,16]) → 23
 */
  for (let i = 1; i < length; i++) {
    const targetArr = arrArrData[i].map(Number);
    const targetArrLength = targetArr.length;
    const tmpArr = [];
    for (let j = 0; j < targetArrLength; j++) {
      let tmpNum = 0;
      if (j === 0) {
        tmpNum = sumArr[j] + targetArr[j];
      } else if (j === targetArrLength - 1) {
        tmpNum = sumArr[j - 1] + targetArr[j];
      } else if (j > 0 && j < targetArrLength - 1) {
        tmpNum = sumArr[j - 1] + targetArr[j];
        if (tmpNum < sumArr[j] + targetArr[j]) {
          tmpNum = sumArr[j] + targetArr[j];
        }
      }
      tmpArr.push(tmpNum);
    }
    sumArr = tmpArr;
  }
  // console.log(sumArr);
  console.log(`最大の合計は${Math.max.apply(null, sumArr)}です。`);
});
