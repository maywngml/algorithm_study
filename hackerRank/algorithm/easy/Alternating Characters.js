// 문제 링크: https://www.hackerrank.com/challenges/alternating-characters/problem?isFullScreen=true
// 시간 복잡도: O(n)

function alternatingCharacters(s) {
  // Write your code here
  const stack = [];
  let result = 0;

  s.split('').forEach((char) => {
    if (stack.length > 0) {
      const top = stack[stack.length - 1];
      if (top === char) {
        result++;
      } else {
        stack.push(char);
      }
    } else {
      stack.push(char);
    }
  });

  return result;
}
