// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/178871
// 시간복잡도: O(n + m)

function solution(players, callings) {
  const playerNumber = new Map();

  players.forEach((player, index) => {
    playerNumber.set(player, index);
  });

  callings.forEach((calling, index) => {
    const currentNumber = playerNumber.get(calling);
    const frontPlayer = players[currentNumber - 1];

    [players[currentNumber], players[currentNumber - 1]] = [
      players[currentNumber - 1],
      players[currentNumber],
    ];

    playerNumber.set(calling, currentNumber - 1);
    playerNumber.set(frontPlayer, currentNumber);
  });

  return players;
}
