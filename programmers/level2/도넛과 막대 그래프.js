// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/258711?language=javascript

function solution(edges) {
  const count = new Map();
  const answer = [0, 0, 0, 0];
  let newVertexCount = 0;

  edges.forEach(([start, end]) => {
    if (count.has(start)) {
      const value = count.get(start);
      count.set(start, [value[0], value[1] + 1]);
    } else {
      count.set(start, [0, 1]);
    }
    if (count.has(end)) {
      const value = count.get(end);
      count.set(end, [value[0] + 1, value[1]]);
    } else {
      count.set(end, [1, 0]);
    }
  });

  for (const [key, value] of count) {
    const [inEdge, outEdge] = value;

    if (inEdge === 0 && outEdge >= 2) {
      answer[0] = key;
      newVertexCount = outEdge;
    } else if (inEdge >= 1 && outEdge === 0) {
      answer[2]++;
    } else if (inEdge >= 2 && outEdge === 2) {
      answer[3]++;
    }
  }

  answer[1] = newVertexCount - answer[2] - answer[3];

  return answer;
}
