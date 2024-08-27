// 문제 링크: https://www.hackerrank.com/challenges/ctci-balanced-brackets/problem?isFullScreen=true
// 후훗,,이 문제는 너무 식은 죽 먹기라굿~~
function isBalanced(expression) {
  // Write your code here
  const stack = [];

  expression.split('').forEach((item) => {
    const lastElement = stack[stack.length - 1];
    if (item === ']' && lastElement === '[') {
      stack.pop();
    } else if (item === '}' && lastElement === '{') {
      stack.pop();
    } else if (item === ')' && lastElement === '(') {
      stack.pop();
    } else {
      stack.push(item);
    }
  });

  return stack.length === 0 ? 'YES' : 'NO';
}
