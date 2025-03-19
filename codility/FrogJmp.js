// 문제 링크: https://app.codility.com/programmers/lessons/3-time_complexity/frog_jmp/start/
// 시간복잡도: O(1)
function solution(X, Y, D) {
  // Implement your solution here
  const quotient = Math.floor((Y - X) / D);
  const remainder = (Y - X) % D;
  return remainder > 0 ? quotient + 1 : quotient;
}
