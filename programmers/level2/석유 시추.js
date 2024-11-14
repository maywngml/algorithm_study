// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/250136?language=javascript

function solution(land) {
  const n = land.length;
  const m = land[0].length;
  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  const mass = Array(m).fill(0);
  let answer = 0;

  const bfs = (startX, startY) => {
    const direction = [
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1],
    ];
    const queue = [[startX, startY]];
    const record = [[startX, startY]];
    let total = 1;

    visited[startX][startY] = true;

    while (queue.length !== 0) {
      const [currentX, currentY] = queue.shift();
      for (let i = 0; i < 4; i++) {
        const nextX = currentX + direction[i][0];
        const nextY = currentY + direction[i][1];
        if (
          nextX < 0 ||
          nextX >= n ||
          nextY < 0 ||
          nextY >= m ||
          land[nextX][nextY] === 0 ||
          visited[nextX][nextY]
        ) {
          continue;
        }
        visited[nextX][nextY] = true;
        queue.push([nextX, nextY]);
        record.push([nextX, nextY]);
        total++;
      }
    }

    return { record, total };
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (land[i][j] === 1 && !visited[i][j]) {
        const { record, total } = bfs(i, j);
        const filterdColumn = new Set(record.map(([i, j]) => j));
        filterdColumn.forEach((column) => {
          mass[column] += total;
        });
      }
    }
  }

  answer = Math.max(...mass);

  return answer;
}
