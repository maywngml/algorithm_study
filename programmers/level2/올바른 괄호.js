// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/12909
// item이 ')'일때만 확인하면 됨. 이때만 올바른 괄호가 나올 수 있으니까
function solution(s) {
  const stack = [];

  s.split('').forEach((item) => {
    const stackLength = stack.length;
    const top = stack[stackLength - 1];
    if (stackLength === 0) {
      stack.push(item);
    } else if (item === ')' && top === '(') {
      stack.pop();
    } else {
      stack.push(item);
    }
  });

  return stack.length === 0 ? true : false;
}
