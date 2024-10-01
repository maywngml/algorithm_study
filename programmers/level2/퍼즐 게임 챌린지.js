// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/340212
// 이분 탐색으로 level의 최소값을 찾자!
// 스프레드 연산자는 배열을 호출 스택에 펼치기 때문에 배열의 길이가 길어지면 런타임 에러가 발생할 수 있다.

const canSolvePuzzle = (diffs, times, limit, level) => {
  const length = diffs.length;
  let total = 0,
    result = true;

  for (let i = 0; i < length; i++) {
    if (diffs[i] <= level) {
      total += times[i];
    } else {
      const prevTime = i === 0 ? 0 : times[i - 1];
      total += (diffs[i] - level) * (times[i] + prevTime) + times[i];
    }

    if (total > limit) {
      result = false;
      break;
    }
  }

  return result;
};

function solution(diffs, times, limit) {
  let maxNum = 0,
    answer = 0;

  diffs.forEach((diff) => {
    if (maxNum < diff) {
      maxNum = diff;
    }
  });

  const binarySearch = (minNum, maxNum) => {
    if (minNum > maxNum) {
      return;
    }

    const halfNum = Math.floor((minNum + maxNum) / 2);
    const solvePuzzleResult = canSolvePuzzle(diffs, times, limit, halfNum);

    if (solvePuzzleResult) {
      answer = halfNum;
      return binarySearch(minNum, halfNum - 1);
    } else {
      return binarySearch(halfNum + 1, maxNum);
    }
  };

  binarySearch(1, maxNum);

  return answer;
}
