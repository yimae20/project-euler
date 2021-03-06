// 発展課題1
// tmpArray= []をtmpMap = new Map<number,number>()として書き直す。(tmpArrayは大体半分くらいが0になるため)
// Map<number,number>、map.set(j,1))

function twoToTheNthPowerSumOfDigits(multiplier: number): number {
  const ansArray: number[] = [1];
  let digit = 1;

  // 指定の乗数回だけ掛け算を繰り返す
  for (let i = 1; i <= multiplier; i++) {
    const tmpMap = new Map<number, number>();
    for (let j = 0; j < digit; j++) {
      // 2のN乗を計算する（各桁配列すべてに2を掛ける）
      // array.mapが使えそうだが、繰り上げ処理が必要なので結局for loopを使う必要がある？
      ansArray[j] *= 2;
      // 各桁が10以上になった場合、繰り上げ処理1
      // 10以上になった桁をtmpMapで記憶する。
      if (ansArray[j] >= 10) {
        tmpMap.set(j, 1);
        ansArray[j] -= 10;
      }
    }
    // 繰り上げ処理2
    tmpMap.forEach((value, key) => {
      ansArray[key + 1] += value;
    });
    if (tmpMap.has(digit - 1)) {
      ansArray[digit] = 1;
    }
    digit = ansArray.length;
    // console.log('tmpArray', tmpArray);
    // console.log('ansArray', ansArray);
  }
  // 各桁の和を求める
  const sumDigits = ansArray.reduce((prev, current) => prev + current);
  console.log(ansArray.reverse().join(''));
  return sumDigits;
}

const multiplier = 1000;
console.log(`2^${multiplier} の各桁の合計は${twoToTheNthPowerSumOfDigits(multiplier)}です。`);
