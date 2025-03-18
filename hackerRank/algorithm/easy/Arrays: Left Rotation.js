// 문제: https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?isFullScreen=true
// 시간복잡도: O(n)
function rotLeft(a, d) {
  // Write your code here
  const length = a.length;
  const movedCount = d % length;
  const result = Array(length).fill(0);

  a.forEach((item, index) => {
    let nextIndex = index - movedCount;
    if (nextIndex < 0) {
      nextIndex += length;
    }
    result[nextIndex] = item;
  });

  return result;
}
