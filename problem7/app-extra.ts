'use strict';

function getPrimeNumber(xTh: number): number {
  let primeNumberCount = 0;
  let primeNumber = 2;
  while (primeNumberCount < xTh) {
    if (isPrimeFactor(primeNumber)) {
      primeNumberCount++;
      // console.log(primeNumber);
    }
    primeNumber++;
  }
  return primeNumber - 1;
}

function isPrimeFactor(number: number): boolean {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(`10001番目の素数は ${getPrimeNumber(1000000)} です。`);
// 10秒以上かかった場合、計算を中断する処理を追加するのは難しいため保留

/* const time = 1; //[s]
setTimeout(() => {
  console.log('n秒以上探索しても見つからなかったため処理を中断します');
  // @ts-ignore
  process.exit(1);
}, time * 1000);
console.log(`10001番目の素数は ${getPrimeNumber(1000000)} です。`);
 */

// async function test() {
//   return getPrimeNumber(1000000);
// }

// // @ts-ignore
// const prime = new Promise(async (resolve, rejects) => {
//   setTimeout(() => {
//     console.log('Timeout');
//     rejects(Error('Timeout'));
//   }, 1000);
//   const answer = await test();
//   resolve(answer);
// });

// prime
//   .then((answer) => {
//     console.log(answer);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// @ts-ignore
// const promise = new Promise((resolve) => {
//   setTimeout(() => {
//     console.log('Timeout');
//   }, 1000);
//   resolve(console.log(`10001番目の素数は ${getPrimeNumber(1000000)} です。`));
// });

// promise.then((value) => {
//   // @ts-ignore
//   process.exit(1);
// });
