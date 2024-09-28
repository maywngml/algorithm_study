// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/1844

function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  const queue = [[0, 0, 1]];
  let answer = 10001;

  visited[0][0] = true; // 효율성에서 떨어지길래 방문표시 미리 함

  while (queue.length > 0) {
    const [cx, cy, ct] = queue.shift();

    if (cx === n - 1 && cy === m - 1) {
      answer = ct;
      break;
    }

    directions.forEach(([dx, dy]) => {
      const nx = cx + dx;
      const ny = cy + dy;
      if (
        nx < 0 ||
        nx >= n ||
        ny < 0 ||
        ny >= m ||
        visited[nx][ny] ||
        maps[nx][ny] === 0
      ) {
        return false;
      }
      visited[nx][ny] = true; // 효율성에서 떨어지길래 방문표시 미리 함
      queue.push([nx, ny, ct + 1]);
    });
  }

  return answer === 10001 ? -1 : answer;
}
