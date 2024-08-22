// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/1845#
// 풀이 방법
// 1. 최대한 많은 종류의 포켓몬을 골라야 하기 때문에 포켓몬 번호 중복 제거
// 2. 포켓몬 개수 / 2, 중복 제거 포켓몬 수 중 작은 수가 정답

// 2022년 코드
function solution(nums) {
  const halfNumsLength = nums.length / 2;
  const ponketmonCnt = new Set(nums).size;
  const answer = Math.min(halfNumsLength, ponketmonCnt);

  return answer;
}

// 2024년 코드
function solution(nums) {
  const noDuplicationNumsLength = new Set(nums).size;
  const halfNumsLength = nums.length / 2;
  return Math.min(noDuplicationNumsLength, halfNumsLength);
}
