// 문제링크: https://www.hackerrank.com/challenges/larrys-array/problem?isFullScreen=true
function larrysArray(A) {
  let inversions = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      if (A[i] > A[j]) {
        inversions++;
      }
    }
  }

  return inversions % 2 === 0 ? 'YES' : 'NO';
}
