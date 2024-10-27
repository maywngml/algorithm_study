// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42883?language=javascript#

function solution(number, k) {
  const stack = [number[0]];
  const length = number.length;
  let count = 0;

  for (let i = 1; i < length; i++) {
    const current = number[i];

    while (stack.length > 0 && stack[stack.length - 1] < current && count < k) {
      stack.pop();
      count++;
    }

    stack.push(current);
  }

  while (count < k) {
    stack.pop();
    count++;
  }

  return stack.join('');
}
