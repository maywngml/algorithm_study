// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42840?language=javascript
// 시간복잡도: O(n)

function solution(answers) {
  const first = [1, 2, 3, 4, 5];
  const second = [2, 1, 2, 3, 2, 4, 2, 5];
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const count = [0, 0, 0];
  const answer = [];

  answers.forEach((answer, index) => {
    if (answer === first[index % first.length]) {
      count[0]++;
    }
    if (answer === second[index % second.length]) {
      count[1]++;
    }
    if (answer === third[index % third.length]) {
      count[2]++;
    }
  });

  const maxCount = Math.max(...count);

  count.forEach((item, index) => {
    if (item === maxCount) {
      answer.push(index + 1);
    }
  });

  return answer;
}
