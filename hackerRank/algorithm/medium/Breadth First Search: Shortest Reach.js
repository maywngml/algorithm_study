// 문제 링크: https://www.hackerrank.com/challenges/bfsshortreach/problem?isFullScreen=true
// bfs 방식으로 확인하고 간선 가중치가 모두 똑같기 때문에 제일 먼저 확인한 거리가 최단거리가 될 수 밖에 없음
// 다익스트라처럼 비교 하지 않아도 됨
function bfs(n, m, edges, s) {
  // Write your code here
  const connection = Array.from({ length: n + 1 }, () => Array(0));
  const distance = new Array(n + 1).fill(-1);
  const queue = [s];

  distance[0] = 0;
  distance[s] = 0;

  edges.forEach(([x, y]) => {
    connection[x].push(y);
    connection[y].push(x);
  });

  while (queue.length > 0) {
    const currentNode = queue.shift();
    connection[currentNode].forEach((nextNode) => {
      if (distance[nextNode] === -1) {
        queue.push(nextNode);
        distance[nextNode] = distance[currentNode] + 6;
      }
    });
  }

  return distance.filter((item) => item !== 0);
}
