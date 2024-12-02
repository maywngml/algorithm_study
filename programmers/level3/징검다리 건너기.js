// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/64062?language=javascript
// 시간 복잡도: O(nlog(maxNum))

function canCross(stones, num, k) {
  let crossCount = 0;

  for (const stone of stones) {
    if (stone < num) {
      crossCount++;
      if (crossCount === k) {
        return false;
      }
    } else {
      crossCount = 0;
    }
  }

  return true;
}

function solution(stones, k) {
  let minNum = 1,
    maxNum = 0;
  let answer = 0;

  for (const stone of stones) {
    maxNum = Math.max(maxNum, stone);
  }

  while (minNum <= maxNum) {
    let midNum = Math.floor((minNum + maxNum) / 2);
    if (canCross(stones, midNum, k)) {
      answer = midNum;
      minNum = midNum + 1;
    } else {
      maxNum = midNum - 1;
    }
  }

  return answer;
}
