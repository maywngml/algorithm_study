// 문제 링크: https://www.hackerrank.com/challenges/coin-change/problem?isFullScreen=true
// 흑흑 자꾸 틀려서 gpt한테 물어봤습니다..
// 생각의 반대로 해야됐었음
// coin 한개로 만들 수 있는 n원의 개수를 더해나가면 됨
// dp[n]은 주어진 동전들로 n원을 만들 수 있는 경우의 수
function getWays(n, c) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;

  c.forEach((coin) => {
    for (let j = coin; j <= n; j++) {
      dp[j] += dp[j - coin];
    }
  });

  return dp[n];
}
