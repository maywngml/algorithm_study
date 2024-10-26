// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/43162?language=javascript

function solution(n, computers) {
  const visited = Array(n).fill(false);
  let answer = 0;

  const bfs = (node) => {
    const queue = [node];
    visited[node] = true;

    while (queue.length > 0) {
      const currentNode = queue.pop();

      for (let index = 0; index < n; index++) {
        if (computers[currentNode][index] === 1 && !visited[index]) {
          visited[index] = true;
          queue.push(index);
        }
      }
    }
  };

  for (let index = 0; index < n; index++) {
    if (!visited[index]) {
      bfs(index);
      answer++;
    }
  }

  return answer;
}
