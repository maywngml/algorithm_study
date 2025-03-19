// 링크: https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/start/
// 시간 복잡도: O(n);

function solution(A) {
  // Implement your solution here
  const record = Array(A.length + 1).fill(false);

  A.forEach((item) => {
    record[item - 1] = true;
  });

  return record.findIndex((item) => !item) + 1;
}
