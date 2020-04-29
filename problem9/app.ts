'use strict';

// const aloopLimit = Math.floor(number/3)-1;
// let bloopLimit = Math.floor((number - a)/2);

function findPythagoreanTriplet(abcSum: number): { a: number; b: number; c: number } {
  for (let a = 1; a <= Math.floor(abcSum / 3) - 1; a++) {
    for (let b = a + 1; b <= Math.floor((abcSum - a) / 2); b++) {
      const c = abcSum - a - b;
      if (Math.pow(c, 2) === Math.pow(a, 2) + Math.pow(b, 2)) {
        console.log(`a:${a}, b:${b}, c:${c}`);
        return { a, b, c };
      }
    }
  }
  throw Error(`a + b + c = ${absSum}となるピタゴラスの三重項はありません。`);
}

const absSum = 1000;
const pythagoreanTriplet = findPythagoreanTriplet(absSum);
const answer = pythagoreanTriplet.a * pythagoreanTriplet.b * pythagoreanTriplet.c;
console.log(`a + b + c = ${absSum}となるピタゴラスの三重項の積abcは ${answer} です。`);
