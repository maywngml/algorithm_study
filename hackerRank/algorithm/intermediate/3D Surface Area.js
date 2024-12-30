// 문제 링크: https://www.hackerrank.com/challenges/3d-surface-area/problem?isFullScreen=true
// 시간 복잡도: O(n^2)
function surfaceArea(A) {
  // Write your code here
  const rows = A.length;
  const columns = A[0].length;
  let result = rows * columns * 2;

  for (let i = 0; i < rows; i++) {
    result += A[i][0] + A[i][columns - 1];
    for (let j = 1; j < columns; j++) {
      result += Math.abs(A[i][j] - A[i][j - 1]);
    }
  }

  for (let j = 0; j < columns; j++) {
    result += A[0][j] + A[rows - 1][j];
    for (let i = 1; i < rows; i++) {
      result += Math.abs(A[i][j] - A[i - 1][j]);
    }
  }

  return result;
}
