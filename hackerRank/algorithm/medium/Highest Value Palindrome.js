// 문제 링크: https://www.hackerrank.com/challenges/richie-rich/problem?isFullScreen=true
// 시간복잡도: O(n)

function highestValuePalindrome(s, n, k) {
  const halfN = Math.floor(n / 2);
  const unMatched = [];
  const result = s.split('');
  let remainingK = k;

  for (let i = 0; i < halfN; i++) {
    if (result[i] !== result[n - 1 - i]) {
      unMatched.push(i);
    }
    if (unMatched.length > k) {
      return -1;
    }
  }

  remainingK = k - unMatched.length;

  for (let i = 0; i < halfN; i++) {
    const backIndex = n - i - 1;

    if (unMatched.includes(i)) {
      if (result[i] > result[backIndex]) {
        result[backIndex] = result[i];
      } else {
        result[i] = result[backIndex];
      }

      if (remainingK > 0 && result[i] !== '9') {
        result[i] = '9';
        result[backIndex] = '9';
        remainingK--;
      }
    } else {
      if (remainingK >= 2 && result[i] !== '9') {
        result[i] = '9';
        result[backIndex] = '9';
        remainingK -= 2;
      }
    }
  }

  if (n % 2 === 1 && remainingK > 0) {
    result[halfN] = '9';
  }

  return result.join('');
}
