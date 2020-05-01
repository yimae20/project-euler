function iterativeSequence(number: number): number {
  if (number % 2 === 0) {
    return number / 2;
  } else {
    return 3 * number + 1;
  }
}

function isAlreadyCalcNumber(arrayNumber: number[], targetNumber: number): boolean {
  return arrayNumber.some((arrayValue) => targetNumber === arrayValue);
}

//この方法だと、開始数10万以下でも計算時間が数分かかるので改良が必要

const limitNumber = 13; //最大開始数および、シーケンス中の最大数値
const checkNumber: number[] = []; //計算した数値の配列
const arrCnt: number[] = []; //計算した数値に対応する、反復回数の配列
let longestChain = 0;
let longestChainNumber = 0;
for (let i = 2; i <= limitNumber; i++) {
  let index = 0;
  let startNumber = i;
  let count = 0;
  while (startNumber !== 1) {
    /*     すでに計算した数値かどうか確認
    true : (今までの反復回数＋すでに計算した数値の反復回数)をしてwhileを終了
    false:シーケンスの実行 */
    if (isAlreadyCalcNumber(checkNumber, startNumber)) {
      index = checkNumber.findIndex((item) => item === startNumber);
      count = arrCnt[index] + count;
      startNumber = 1;
    } else {
      checkNumber.push(startNumber);
      startNumber = iterativeSequence(startNumber);
      count++;
    }

    /*     TODO
    limitNumberを超えたかどうか、チェックして超えていれば
    while loopを終了する
    超えるまでに計算した数値および反復回数をどうするか要検討 */
  }
  //すでに計算した数値であれば反復回数を、計算した数値でなければ、0を代入
  let x = 0;
  if (isNaN(arrCnt[index])) {
    x = 0;
  } else {
    x = arrCnt[index];
  }
  //計算した数値の反復回数を配列arrCntに代入
  for (let j = 0; j < count - x; j++) {
    arrCnt.push(count - j);
  }
  //反復回数が長ければ、最大反復回数とその時の開始数を更新
  if (longestChain < count) {
    longestChain = count;
    longestChainNumber = i;
  }
}
console.log(longestChainNumber, longestChain);
