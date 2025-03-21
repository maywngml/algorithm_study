// 문제: https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/start/
// 시간복잡도: O(n)
function solution(N, A) {
  // Implement your solution here
  const counters = Array(N + 1).fill(0);
  let currentMax = 0,
    lastMax = 0;

  A.forEach((item) => {
    if (item === N + 1) {
      lastMax = currentMax;
    } else {
      if (counters[item] < lastMax) {
        counters[item] = lastMax + 1;
      } else {
        counters[item] += 1;
      }
      currentMax = Math.max(currentMax, counters[item]);
    }
  });

  counters.forEach((item, index) => {
    if (item < lastMax) {
      counters[index] = lastMax;
    }
  });

  counters.shift();

  return counters;
}

function solution(S) {
  const result = new Set();
  const splitedS = S.splite('');
  const changeNum = [
    [0, 3, 6, 9],
    [2, 5, 8],
    [1, 4, 7],
  ];
  let total = 0,
    currentTotal = 0;

  splitedS.forEach((item) => {
    total += +item;
  });

  currentToal = total;

  splitedS.forEach((item, index) => {
    const numberItem = +item;
    currentTotal -= numberItem;
    const changeNumIndex = currentTotal % 3;

    changeNum[changeNumIndex].forEach((item) => {
      result.add(`${S.slice(0, index)}${item}${S.slice(index + 1)}`);
    });

    currentTotal += numberItem;
  });

  return result.size;
}
