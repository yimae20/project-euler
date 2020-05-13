// 発展課題2
// indexをif (isAlreadyCalcNumber(..., ...)){ ... } else { ... }の中におさめる

// → if (isNaN(arrayCount[index])){...}else{...}を削除し、indexのスコープをwhile loop内におさめた
// arrayNumber.some(...)とfindIndexはそのままのため、計算時間は変わらず長いまま

const startTime = Date.now();

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

//  この方法だと、開始数10万以下でも計算時間が数分かかる
//  100万以下で2～3時間かかる
function findLongestChainNumber(limitNumber: number): number {
  const arrayCalculatedNumber: number[] = []; //計算した数値の配列
  const arrayCount: number[] = []; //計算した数値に対応する連鎖回数の配列
  let longestChainCount = 0;
  let longestChainNumber = 0;

  for (let i = 2; i <= limitNumber; i++) {
    let currentNumber = i;
    let count = 0;
    let newCalculatedCount = 0;
    while (currentNumber !== 1) {
      // 計算したことがある数値かどうか確認
      // true : (今までの連鎖回数 ＋ 計算したことがある数値の連鎖回数)をcountに代入して現在の開始数の計算(while loop)を終了
      // false: シーケンスの実行
      if (isAlreadyCalcNumber(arrayCalculatedNumber, currentNumber)) {
        const index = arrayCalculatedNumber.findIndex((item) => item === currentNumber);
        newCalculatedCount = count;
        count = arrayCount[index] + count;
        currentNumber = 1;
      } else {
        arrayCalculatedNumber.push(currentNumber);
        currentNumber = iterativeSequence(currentNumber);
        count++;
        newCalculatedCount++;
      }
    }
    //配列arrayCountに連鎖回数を代入
    for (let j = 0; j < newCalculatedCount; j++) {
      arrayCount.push(count - j);
    }
    //最大連鎖回数とその時の開始数を更新
    if (longestChainCount < count) {
      longestChainCount = count;
      longestChainNumber = i;
    }
  }
  console.log(longestChainNumber, longestChainCount);
  return longestChainNumber;
}

const limitNumber = 1000; // 開始数の最大値
console.log(`${limitNumber} 以下の開始数の中で最も長い連鎖ができるのは ${findLongestChainNumber(limitNumber)} です。`);

const endTime = Date.now();
const calcTime = Math.round((endTime / 1000 - startTime / 1000) * 1000) / 1000;
console.log(`計算時間：${calcTime}秒`);
