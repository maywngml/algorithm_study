// 백트래킹, 완탐
function solution(N, K, weights) {
  const visited = Array(N).fill(false);
  let result = 0;

  const dfs = (cn, 누적_증가량) => {
    if (cn === N) {
      result++;
      return;
    }

    for (let i = 0; i < N; i++) {
      const 새_증가량 = weights[i] + 누적_증가량;

      if (!visited[i] && 새_증가량 >= K * cn) {
        visited[i] = true;
        dfs(cn + 1, 새_증가량);
        visited[i] = false;
      }
    }
  };

  dfs(1, 0);

  console.log(result);
}
