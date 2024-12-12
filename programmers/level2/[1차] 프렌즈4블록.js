// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/17679

function bfs(i, j, board, visited) {
  const character = board[i][j];
  const m = board.length,
    n = board[0].length;
  const direction = [
    [0, 1],
    [1, 1],
    [1, 0],
  ];
  const queue = [[i, j]];
  const footprint = [[i, j]];
  let count = 1;

  visited[i][j] = true;

  while (queue.length > 0) {
    const [currentX, currentY] = queue.shift();
    let sameCharacterCount = 1;

    for (const [x, y] of direction) {
      const newX = currentX + x;
      const newY = currentY + y;
      if (newX < 0 || newX >= m || newY < 0 || newY >= n) {
        break;
      }
      if (board[newX][newY] === character && character !== 'X') {
        sameCharacterCount++;
      }
    }

    if (sameCharacterCount === 4) {
      for (const [x, y] of direction) {
        const newX = currentX + x;
        const newY = currentY + y;
        if (!visited[newX][newY]) {
          visited[newX][newY] = true;
          queue.push([newX, newY]);
          footprint.push([newX, newY]);
          count++;
        }
      }
    }
  }

  if (count >= 4) {
    footprint.forEach(([x, y]) => {
      board[x][y] = 'X';
    });

    return count;
  } else {
    return 0;
  }
}

function solution(m, n, board) {
  const changedBoard = [];
  let answer = 0;

  board.forEach((row) => {
    changedBoard.push(row.split(''));
  });

  while (true) {
    const visited = Array.from({ length: m }, () => Array(n).fill(false));
    let count = 0;

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (changedBoard[i][j] !== 'X' && !visited[i][j]) {
          count += bfs(i, j, changedBoard, visited);
        }
      }
    }

    if (count > 0) {
      answer += count;
      for (let j = 0; j < n; j++) {
        const queue = [];
        for (let i = m - 1; i >= 0; i--) {
          if (changedBoard[i][j] !== 'X') {
            queue.push(changedBoard[i][j]);
          }
        }

        for (let i = m - 1; i >= 0; i--) {
          changedBoard[i][j] = queue.shift() || 'X';
        }
      }
    } else {
      break;
    }
  }

  return answer;
}
