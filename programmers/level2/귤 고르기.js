// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/138476
// 시간복잡도: O(nlogn)

function solution(k, tangerine) {
  const totalCountObject = {};
  let answer = 0;

  tangerine.forEach((item) => {
    totalCountObject[item] = (totalCountObject[item] || 0) + 1;
  });

  const totalCountArray = Object.values(totalCountObject).sort((a, b) => b - a);

  for (const totalCount of totalCountArray) {
    if (k > 0) {
      k -= totalCount;
      answer++;
    } else {
      break;
    }
  }

  return answer;
}
