// 문제 링크: https://app.codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/start/
// 시간 복잡도: O(n)

function solution(A) {
  const length = A.length;
  const total = A.reduce((total, item) => total + item, 0);
  let leftSum = 0,
    result = Infinity;

  for (let i = 0; i < length - 1; i++) {
    leftSum += A[i];
    const rightSum = total - leftSum;
    result = Math.min(result, Math.abs(leftSum - rightSum));
  }

  return result;
}
