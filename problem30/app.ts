function digitNthPowers(n: number): number {
  const nArr = [
    0,
    1,
    Math.pow(2, n), // n=5のとき、32
    Math.pow(3, n), // 243
    Math.pow(4, n), // 1024
    Math.pow(5, n), // 3125
    Math.pow(6, n), // 7776
    Math.pow(7, n), // 16807
    Math.pow(8, n), // 32768
    Math.pow(9, n), // 59049
  ];
  let ans = 0;
  // 2 ~ (9^n)*(n+1)までの全ての数値を確認（1は含まない）
  // n=5のとき(9^5)*(5+1)=354,294まで
  for (let i = 2; i <= nArr[9] * (n + 1); i++) {
    const iArr = i.toString().split('');
    const iArrLength = iArr.length;
    let iSumNthPower = 0;
    for (let j = 0; j < iArrLength; j++) {
      // +iArrで文字列iArrを数値に変換
      iSumNthPower += nArr[+iArr[j]];
    }
    if (i === iSumNthPower) {
      // console.log(i);
      ans += i;
    }
  }
  return ans;
}
console.log(`桁の5乗の和として書けるすべての数字の和は${digitNthPowers(5)}です。`);
