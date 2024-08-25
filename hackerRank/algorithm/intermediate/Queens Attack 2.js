// 문제 링크: https://www.hackerrank.com/challenges/queens-attack-2/problem?isFullScreen=true

// 첫번째 구현방법
// 일일이 확인하니까 타임아웃 발생
function queensAttack(n, k, r_q, c_q, obstacles) {
  const direction = [
    [1, 0],
    [1, 1],
    [0, 1],
    [-1, 1],
    [-1, 0],
    [-1, -1],
    [0, -1],
    [1, -1],
  ];
  const visited = Array.from({ length: n + 1 }, () => Array(n + 1).fill(false));
  let count = 0;

  obstacles.forEach(([r_o, c_o]) => {
    visited[r_o][c_o] = true;
  });

  direction.forEach(([r_d, c_d]) => {
    const queue = [[r_q, c_q]];
    while (queue.length > 0) {
      const [r_c, c_c] = queue.shift();
      const r_n = r_c + r_d;
      const c_n = c_c + c_d;
      if (r_n < 1 || r_n > n || c_n < 1 || c_n > n || visited[r_n][c_n]) {
        return false;
      }
      queue.push([r_n, c_n]);
      visited[r_c][c_c] = true;
      count++;
    }
  });

  return count;
}

// 정답
// 알고리즘을 따로 적용하진 않고 그냥 빡 구현을 해버렸다
// 1. 퀸이 각 방향으로 이동 가능한 거리를 미리 계산
// 2. 장애물이 퀸이 이동가능한 경로에 있다면 퀸과 장애물 사이의 거리를 계산하고 저장해놓은 이동 가능 거리와 크기를 비교해 최소값을 저장
// 3. 모든 방향의 이동 가능 거리 더해서 반환
function queensAttack(n, k, r_q, c_q, obstacles) {
  let top = n - r_q,
    right = n - c_q,
    bottom = r_q - 1,
    left = c_q - 1,
    rightTop = Math.min(top, right),
    rightBottom = Math.min(right, bottom),
    leftBottom = Math.min(left, bottom),
    leftTop = Math.min(left, top);

  obstacles.forEach(([r_o, c_o]) => {
    if (r_o > r_q && c_o === c_q) {
      top = Math.min(top, r_o - r_q - 1);
    } else if (r_o === r_q && c_o > c_q) {
      right = Math.min(right, c_o - c_q - 1);
    } else if (r_o < r_q && c_o === c_q) {
      bottom = Math.min(bottom, r_q - r_o - 1);
    } else if (r_o === r_q && c_o < c_q) {
      left = Math.min(left, c_q - c_o - 1);
    } else if (Math.abs(r_o - r_q) === Math.abs(c_o - c_q)) {
      const distance = Math.abs(r_o - r_q) - 1;
      if (r_o > r_q && c_o > c_q) {
        rightTop = Math.min(rightTop, distance);
      } else if (r_o < r_q && c_o > c_q) {
        rightBottom = Math.min(rightBottom, distance);
      } else if (r_o < r_q && c_o < c_q) {
        leftBottom = Math.min(leftBottom, distance);
      } else {
        leftTop = Math.min(leftTop, distance);
      }
    }
  });

  return (
    top + rightTop + right + rightBottom + bottom + leftBottom + left + leftTop
  );
}
