function onesPlaceCount(number: number): number {
  let letterCount = 0;
  if (number === 1) {
    letterCount = 3; //one
  } else if (number === 2) {
    letterCount = 3; //two
  } else if (number === 3) {
    letterCount = 5; //three
  } else if (number === 4) {
    letterCount = 4; //four
  } else if (number === 5) {
    letterCount = 4; //five
  } else if (number === 6) {
    letterCount = 3; //six
  } else if (number === 7) {
    letterCount = 5; //seven
  } else if (number === 8) {
    letterCount = 5; //eight
  } else if (number === 9) {
    letterCount = 4; //nine
  }
  return letterCount;
}

// 10~19までの処理
function tens1PlaceCount(onesPlace: number): number {
  let letterCount = 3; //一の位が0の時ten
  if (onesPlace === 1) {
    letterCount = 6; //eleven
  } else if (onesPlace === 2) {
    letterCount = 6; //twelve
  } else if (onesPlace === 3) {
    letterCount = 8; //thirteen
  } else if (onesPlace === 4) {
    letterCount = 8; //fourteen
  } else if (onesPlace === 5) {
    letterCount = 7; //fifteen
  } else if (onesPlace === 6) {
    letterCount = 7; //sixteen
  } else if (onesPlace === 7) {
    letterCount = 9; //seventeen
  } else if (onesPlace === 8) {
    letterCount = 8; //eighteen
  } else if (onesPlace === 9) {
    letterCount = 8; //nineteen
  }
  return letterCount;
}

// 20以上の処理
function tens2PlaceCount(tensPlace: number): number {
  let letterCount = 0;
  if (tensPlace === 2) {
    letterCount = 6; //twenty
  } else if (tensPlace === 3) {
    letterCount = 6; //thirty
  } else if (tensPlace === 4) {
    letterCount = 5; //forty
  } else if (tensPlace === 5) {
    letterCount = 5; //fifty
  } else if (tensPlace === 6) {
    letterCount = 5; //sixty
  } else if (tensPlace === 7) {
    letterCount = 7; //seventy
  } else if (tensPlace === 8) {
    letterCount = 6; //eighty
  } else if (tensPlace === 9) {
    letterCount = 6; //ninety
  }
  return letterCount;
}

function numberLetterCounts(number: number): number {
  // ex1)
  // 121 => abc
  // one hundred and twenty one
  // a + 7 + 3 + b + c

  // ex2)
  // 1000 => abcd
  // one thousand
  // x + 8

  let sumLetterCounts = 0;
  for (let i = 1; i <= number; i++) {
    const arrNum = i.toString().split('').map(Number);
    const length = arrNum.length;
    // 千の位の文字数 thousand:8文字
    if (length >= 4) {
      sumLetterCounts += onesPlaceCount(arrNum[length - 4]) + 8;
    }

    // 百の位の文字数 hundred:7文字
    if (length >= 3) {
      if (arrNum[length - 3] !== 0) {
        sumLetterCounts += onesPlaceCount(arrNum[length - 3]) + 7;
      }
      // 十の位か一の位が0でないならand:3を追加カウントする
      if (arrNum[length - 2] !== 0 || arrNum[length - 1] !== 0) {
        sumLetterCounts += 3;
      }
    }

    // 十の位の文字数
    if (length >= 2) {
      // 10~19までの処理
      if (arrNum[length - 2] === 1) {
        sumLetterCounts += tens1PlaceCount(arrNum[length - 1]) - onesPlaceCount(arrNum[length - 1]);
      }
      // 20以上の処理
      else {
        sumLetterCounts += tens2PlaceCount(arrNum[length - 2]);
      }
    }

    // 一の位の文字数
    if (length >= 1) {
      sumLetterCounts += onesPlaceCount(arrNum[length - 1]);
    }
  }
  return sumLetterCounts;
}

const endNumber = 1000;
console.log(`1から${endNumber}までの数字の文字数の合計は${numberLetterCounts(endNumber)}です。`);
