// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/43105
// 시간 복잡도: O(n^2)

function solution(triangle) {
  const rows = triangle.length;
  const result = [];
  let answer = 0;

  for (let i = 0; i < rows; i++) {
    result.push(Array(i + 1).fill(0));
  }

  result[0][0] = triangle[0][0];

  for (let i = 1; i < rows; i++) {
    for (let j = 0; j <= i; j++) {
      if (j === 0) {
        result[i][j] = triangle[i][j] + result[i - 1][j];
      } else if (j === i) {
        result[i][j] = triangle[i][j] + result[i - 1][j - 1];
      } else {
        result[i][j] =
          Math.max(result[i - 1][j - 1], result[i - 1][j]) + triangle[i][j];
      }
    }
  }

  for (const num of result[rows - 1]) {
    answer = Math.max(answer, num);
  }

  return answer;
}
