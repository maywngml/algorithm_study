// 문제 링크: https://www.hackerrank.com/challenges/greedy-florist/problem?isFullScreen=true
// 비싼 꽃은 적게, 싼 꽃은 많이 사도록 해야함
// 친구들이 돌아가면서 꽃을 사도록 해야 최소 액수로 살 수 있음
// 내림차순 정렬해 가장 비싼 꽃부터 확인한다
function getMinimumCost(k, c) {
  const sortedCost = c.sort((a, b) => b - a);
  const previousPurchases = new Array(k).fill(0);
  let answer = 0;

  sortedCost.forEach((cost, index) => {
    answer += (previousPurchases[index % k] + 1) * cost;
    previousPurchases[index % k] += 1;
  });

  return answer;
}
