// 완전탐색 + DFS
function solution(R, C, K, mapInfo) {
  const visited = Array.from({ length: R }, () => Array(C).fill(false));
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  let answer = 0;

  function dfs(cx, cy, cr) {
    if (cx === 0 && cy === C - 1 && cr === K) {
      answer++;
      return;
    }

    for (const [dx, dy] of directions) {
      const nx = cx + dx,
        ny = cy + dy;

      if (
        nx < 0 ||
        nx >= R ||
        ny < 0 ||
        ny >= C ||
        visited[nx][ny] ||
        mapInfo[nx][ny] === 'T'
      ) {
        continue;
      }

      visited[nx][ny] = true;
      dfs(nx, ny, cr + 1);
      visited[nx][ny] = false;
    }
  }

  visited[R - 1][0] = true;
  dfs(R - 1, 0, 1);

  console.log(answer);
}
