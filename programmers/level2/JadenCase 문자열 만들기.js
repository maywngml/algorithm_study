// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/12951#
// 시간 복잡도: O(n)

function solution(s) {
  const sLength = s.length;
  let lastChar = ' ';
  let answer = '';

  for (let i = 0; i < sLength; i++) {
    const char = s[i];
    if (char === ' ') {
      answer += char;
    } else {
      if (lastChar === ' ') {
        answer += char.toUpperCase();
      } else {
        answer += char.toLowerCase();
      }
    }
    lastChar = char;
  }

  return answer;
}
