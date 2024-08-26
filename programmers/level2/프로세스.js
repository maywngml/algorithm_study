// 문제링크: https://school.programmers.co.kr/learn/courses/30/lessons/42587?language=javascript
function solution(priorities, location) {
  const prioritiesLength = priorities.length;
  let index = 0,
    answer = 0;

  while (true) {
    const priority = priorities[index];
    if (priority !== 0 && priority === Math.max(...priorities)) {
      priorities[index] = 0;
      answer++;
      if (index === location) {
        break;
      }
    }

    index = (index + 1) % prioritiesLength;
  }

  return answer;
}
