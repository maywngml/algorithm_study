// 문제 링크: https://school.programmers.co.kr/questions/24593
// 시간 복잡도: O(n^2)

function solution(m, n, puddles) {
  const dp = Array.from({ length: n }, () => Array(m).fill(0));
  const paddleMap = Array.from({ length: n }, () => Array(m).fill(0));

  puddles.forEach(([px, py]) => {
    paddleMap[py - 1][px - 1] = 1;
  });

  // 첫 열과 행은 1로 초기화를 하지만
  // 중간에 물웅덩이를 만난다면 그 다음 길은 갈 수 있는 방법이 없기 때문에 반복문 종료
  for (let i = 0; i < n; i++) {
    if (paddleMap[i][0] === 1) {
      break;
    }
    dp[i][0] = 1;
  }

  for (let j = 0; j < m; j++) {
    if (paddleMap[0][j] === 1) {
      break;
    }
    dp[0][j] = 1;
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (paddleMap[i][j] !== 1) {
        // dp 값 대입할때마다 1000000007로 나눠야 함!!
        dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % 1000000007;
      }
    }
  }

  return dp[n - 1][m - 1];
}
