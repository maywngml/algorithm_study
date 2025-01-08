// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/87694
// 시간복잡도: O(40,000)

function bfs(map, characterX, characterY, itemX, itemY) {
  const visited = Array.from({ length: 100 }, () => Array(100).fill(false));
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  const queue = [[characterX, characterY, 0]];

  while (queue.length !== 0) {
    const [currentX, currentY, currentCount] = queue.shift();

    if (currentX === itemX && currentY === itemY) {
      return Math.floor(currentCount / 2);
    }

    if (!visited[currentX][currentY]) {
      visited[currentX][currentY] = true;

      for (const direction of directions) {
        const [dx, dy] = direction;
        const newX = currentX + dx;
        const newY = currentY + dy;

        if (
          newX < 0 ||
          newX >= 100 ||
          newY < 0 ||
          newY >= 100 ||
          visited[newX][newY] ||
          map[newX][newY] !== 1
        ) {
          continue;
        }

        queue.push([newX, newY, currentCount + 1]);
      }
    }
  }
}

function solution(rectangle, characterX, characterY, itemX, itemY) {
  const map = Array.from({ length: 100 }, () => Array(100).fill(-1));
  let answer = 0;

  rectangle.forEach(([x1, y1, x2, y2]) => {
    const i1 = 100 - y1 * 2,
      j1 = x1 * 2 - 1;
    const i2 = 100 - y2 * 2,
      j2 = x2 * 2 - 1;
    for (let i = i2; i <= i1; i++) {
      for (let j = j1; j <= j2; j++) {
        if (map[i][j] === 0) {
          continue;
        }
        if (i === i2 || i === i1 || j === j1 || j === j2) {
          map[i][j] = 1;
        } else {
          map[i][j] = 0;
        }
      }
    }
  });

  const convertedCharacterX = 100 - characterY * 2,
    convertedCharacterY = characterX * 2 - 1;
  const convertedItemX = 100 - itemY * 2,
    convertedItemY = itemX * 2 - 1;

  return bfs(
    map,
    convertedCharacterX,
    convertedCharacterY,
    convertedItemX,
    convertedItemY
  );
}
