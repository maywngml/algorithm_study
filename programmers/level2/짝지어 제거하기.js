// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/12973

function solution(s) {
  const stack = [s[0]];
  const length = s.length;

  for (let i = 1; i < length; i++) {
    if (stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length === 0 ? 1 : 0;
}
