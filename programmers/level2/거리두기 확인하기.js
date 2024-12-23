// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/81302

function getPeoplePosition(place) {
  const location = [];
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (place[i][j] === 'P') {
        location.push([i, j]);
      }
    }
  }
  return location;
}

function bfs(startPosition, place) {
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  const queue = [startPosition.concat(0)];
  const visited = Array.from({ length: 5 }, () => Array(5).fill(false));

  while (queue.length !== 0) {
    const [cx, cy, cd] = queue.shift();

    if (visited[cx][cy]) {
      continue;
    }

    visited[cx][cy] = true;

    for (const direction of directions) {
      const [x, y] = direction;
      const nx = x + cx,
        ny = y + cy;
      if (
        nx < 0 ||
        nx >= 5 ||
        ny < 0 ||
        ny >= 5 ||
        visited[nx][ny] ||
        place[nx][ny] === 'X' ||
        cd === 2
      ) {
        continue;
      }
      if (cd <= 1 && place[nx][ny] === 'P') {
        return 0;
      }
      queue.push([nx, ny, cd + 1]);
    }
  }
  return 1;
}

function solution(places) {
  const answer = [];

  for (const place of places) {
    const peoplePosition = getPeoplePosition(place);
    let result = 1;
    for (const location of peoplePosition) {
      result = bfs(location, place);
      if (result === 0) {
        break;
      }
    }
    answer.push(result);
  }

  return answer;
}
