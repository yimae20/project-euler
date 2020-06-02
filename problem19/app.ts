/* 
You are given the following information, but you may prefer to do some research for yourself.

1 Jan 1900 was a Monday.
Thirty days has September,April, June and November.
All the rest have thirty-one,Saving February alone,Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.

A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
 */

// アルゴリズム
// 1.連想配列にすべての曜日のデータを格納する
// 2.連想配列から必要な情報を読み取る

// 1.
// startYearの1月1日からendYearの12月31日までの曜日データを格納
// startYearの1月1日が何曜日か知っている必要がある
function setDays(startYear: number, startDays: string, endYear: number): Map<string, string> {
  const dayMap = new Map<string, string>();
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  let count = days.indexOf(startDays);

  for (let year = startYear; year <= endYear; year++) {
    for (let month = 1; month <= 12; month++) {
      let numberOfDays = 0;
      switch (month) {
        case 1:
          numberOfDays = 31;
          break;
        case 2:
          if (year % 4 === 0) {
            if (year % 100 === 0 && year % 400 !== 0) {
              numberOfDays = 28;
            } else {
              numberOfDays = 29; //うるう年
            }
          } else {
            numberOfDays = 28;
          }
          break;
        case 3:
          numberOfDays = 31;
          break;
        case 4:
          numberOfDays = 30;
          break;
        case 5:
          numberOfDays = 31;
          break;
        case 6:
          numberOfDays = 30;
          break;
        case 7:
          numberOfDays = 31;
          break;
        case 8:
          numberOfDays = 31;
          break;
        case 9:
          numberOfDays = 30;
          break;
        case 10:
          numberOfDays = 31;
          break;
        case 11:
          numberOfDays = 30;
          break;
        case 12:
          numberOfDays = 31;
          break;
      }
      for (let day = 1; day <= numberOfDays; day++) {
        dayMap.set(`${day}/${month}/${year}`, days[count % 7]);
        count++;
      }
    }
  }
  return dayMap;
}

// 2.
// 月初(1日)の曜日がsundayである回数を計算する
function countSundays(startYear: number, startDays: string, endYear: number): number {
  const dayMap = setDays(startYear, startDays, endYear);
  let count = 0;
  dayMap.forEach((value, key) => {
    if (key.indexOf('1/') === 0 && value === 'sunday') {
      // console.log(key, value);
      count++;
    }
  });
  return count;
}

const startYear = 1901;
const startDays = 'tuesday';
const endYear = 2000;

console.log(
  `${startYear}年～${endYear}年で月初がsundayである回数は${countSundays(startYear, startDays, endYear)}回です。`
);
