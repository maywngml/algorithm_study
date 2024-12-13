// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/64061
// 시간복잡도: O(n * m)

function solution(board, moves) {
  const rows = board.length;
  const stack = [];
  let answer = 0;

  for (const move of moves) {
    const column = move - 1;
    let character = -1;
    for (let row = 0; row < rows; row++) {
      if (board[row][column] !== 0) {
        character = board[row][column];
        board[row][column] = 0;
        break;
      }
    }

    if (character !== -1) {
      const top = stack[stack.length - 1];

      if (top === character) {
        stack.pop();
        answer += 2;
      } else {
        stack.push(character);
      }
    }
  }

  return answer;
}
