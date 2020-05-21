// 発展課題1
// arrayNumber.some(...)とfindIndexは使わず、連想配列を使って解く(計算時間を短縮する)

// → 連想配列valueMapとwhile loop中に計算したcurrentNumberを記憶しておく配列tmpArrayを使って解いた
// 100万以下の計算時間は約1.5s

const startTime = Date.now();

function iterativeSequence(number: number): number {
  if (number % 2 === 0) {
    return number / 2;
  } else {
    return 3 * number + 1;
  }
}

function findLongestChainNumber(limitNumber: number): number {
  const valueMap = new Map<number, number>();
  let longestChainCount = 0;
  let longestChainNumber = 0;
  for (let i = 2; i <= limitNumber; i++) {
    let currentNumber = i;
    let count = 0;
    let calculatedValue = 0;
    const tmpArray = [];
    while (currentNumber !== 1) {
      // 計算したことがある数値かどうか確認
      // true : その時の連鎖回数を取得し、while loopを終了する
      // false: シーケンスの実行、仮配列に現在の数値を代入
      if (valueMap.has(currentNumber)) {
        const value = valueMap.get(currentNumber);
        if (typeof value !== 'undefined') {
          calculatedValue = value;
        }
        currentNumber = 1;
      } else {
        tmpArray[count] = currentNumber;
        currentNumber = iterativeSequence(currentNumber);
        count++;
      }
    }
    const sumCount = calculatedValue + count;
    for (let k = 0; k < count; k++) {
      valueMap.set(tmpArray[k], sumCount - k);
    }
    //最大連鎖回数とその時の開始数を更新
    if (longestChainCount < sumCount) {
      longestChainCount = sumCount;
      longestChainNumber = i;
    }
  }
  // const len = Object.keys(valueMap);
  // console.log(len);
  // console.log(longestChainNumber, longestChainCount);
  console.log(valueMap.size);
  console.log(process.memoryUsage());
  return longestChainNumber;
}
const limitNumber = 4000000; // 開始数の最大値
console.log(`${limitNumber} 以下の開始数の中で最も長い連鎖ができるのは ${findLongestChainNumber(limitNumber)} です。`);

const endTime = Date.now();
const calcTime = Math.round((endTime / 1000 - startTime / 1000) * 1000) / 1000;
console.log(`計算時間：${calcTime}秒`);
