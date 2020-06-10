/* 
A permutation is an ordered arrangement of objects. 
For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. 
If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. 
The lexicographic permutations of 0, 1 and 2 are:

012   021   102   120   201   210

What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
 */

// 10個の数字の並べ替えは10!= 3,628,800通り(約363万)
// 真面目に全通りを配列に格納するとおそらくメモリが不足する？(並べ替える数字が1つ増えるだけでも膨大な配列数になる)

import * as lodash from 'lodash';
import { factorial } from '../util/Math';

function lexicographicPermutation(startArray: number[], Nth: number): string {
  // Nthは0スタート
  // Nth = 0 , startArray[0,1,2]のとき012となる
  // Nth = 1 → 021
  // よって最初にtargetNthを-1する
  let tmpNth = Nth - 1;
  let tmpDigit = startArray.length;
  const digits = tmpDigit;
  const ansArray = [];
  for (let i = 1; i <= digits; i++) {
    const ways = factorial(tmpDigit - 1);
    const x = Math.floor(tmpNth / ways);
    ansArray.push(startArray.splice(x, 1));
    tmpNth -= ways * x;
    tmpDigit--;
  }
  return lodash.flatten(ansArray).join('');
}

const startArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const Nth = 1000000; //100万

console.log(`[${startArray}]の${Nth}番目の辞書順列は${lexicographicPermutation(startArray, Nth)}です。`);
