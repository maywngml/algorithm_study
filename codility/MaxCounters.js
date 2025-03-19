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
