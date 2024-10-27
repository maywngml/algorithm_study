// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42885

function solution(people, limit) {
  const sortedPeople = [...people].sort((a, b) => a - b);
  let frontIndex = 0,
    backIndex = people.length - 1;
  let answer = 0;

  while (frontIndex <= backIndex) {
    if (sortedPeople[frontIndex] + sortedPeople[backIndex] <= limit) {
      frontIndex++;
    }
    backIndex--;
    answer++;
  }

  return answer;
}
