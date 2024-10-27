//문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42746?language=javascript

function solution(numbers) {
  let answer = numbers
    .sort((num1, num2) => `${num2}${num1}` - `${num1}${num2}`)
    .join('');

  if (answer[0] === '0') {
    answer = '0';
  }

  return answer;
}
