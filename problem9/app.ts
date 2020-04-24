'use strict';

// const aloopLimit = Math.floor(number/3)-1;
// let bloopLimit = Math.floor((number - a)/2-1);

function findPythagoreanTriplet(number): number[] {
  for (let a = 1; a <= Math.floor(number / 3) - 1; a++) {
    for (let b = a + 1; b <= Math.floor((number - a) / 2 - 1); b++) {
      const c = number - a - b;
      if (Math.pow(c, 2) === Math.pow(a, 2) + Math.pow(b, 2)) {
        console.log(`a:${a}, b:${b}, c:${c}`);
        return [a, b, c];
      }
    }
  }
  throw `a + b + c = ${number}となるピタゴラスの三重項はありません。`;
}

const number = 1000;
const pythagoreanTriplet = findPythagoreanTriplet(number);
const answer = pythagoreanTriplet[0] * pythagoreanTriplet[1] * pythagoreanTriplet[2];
console.log(`a + b + c = ${number}となるピタゴラスの三重項の積abcは ${answer} です。`);
