// 문제 링크: https://www.hackerrank.com/challenges/balanced-brackets/problem?isFullScreen=true
// 시간 복잡도: O(n)

function isBalanced(s) {
  // Write your code here
  const stack = [];

  s.split('').forEach((item) => {
    if (item === '{' || item === '(' || item === '[') {
      stack.push(item);
    } else {
      const top = stack[stack.length - 1];
      if (top === '{' && item === '}') {
        stack.pop();
      } else if (top === '(' && item === ')') {
        stack.pop();
      } else if (top === '[' && item === ']') {
        stack.pop();
      } else {
        stack.push(item);
      }
    }
  });

  return stack.length > 0 ? 'NO' : 'YES';
}
