// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/12941
// 시간 복잡도: O(nlogn)

function solution(A, B) {
  const length = A.length;
  let right = length - 1;
  let answer = 0;

  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);

  for (let left = 0; left < length; left++) {
    answer += A[left] * B[right];
    right--;
  }

  return answer;
}
