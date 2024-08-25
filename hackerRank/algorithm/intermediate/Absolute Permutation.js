// 문제 링크: https://www.hackerrank.com/challenges/absolute-permutation/problem?isFullScreen=true
// 작은 순열을 만들어야 한다는 것에 집중!
// 일단 작은 수 먼저 확인하도록 하자
// 풀이 시간: 44분 ㅠㅠ,,
function absolutePermutation(n, k) {
  // Write your code here
  const checked = new Array(n + 1).fill(false);
  const answer = [];

  for (let i = 1; i <= n; i++) {
    if (i - k > 0 && !checked[i - k]) {
      checked[i - k] = true;
      answer.push(i - k);
    } else if (i + k <= n && !checked[i + k]) {
      checked[i + k] = true;
      answer.push(i + k);
    }
  }

  if (answer.length === n) {
    return answer;
  } else {
    return [-1];
  }
}
