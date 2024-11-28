// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/64065
// 시간복잡도: O(nlogn)

function solution(s) {
  const checked = {};
  const splitedS = s
    .split('},')
    .map((s) => s.replaceAll(/[{}]/g, '').split(','));
  const answer = [];

  splitedS.sort((a, b) => a.length - b.length);

  splitedS.forEach((s) => {
    s.forEach((item) => {
      if (!checked[item]) {
        checked[item] = true;
        answer.push(+item);
      }
    });
  });

  return answer;
}
