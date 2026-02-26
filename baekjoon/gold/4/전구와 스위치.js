// 그리디
// i번째 전구의 켜짐 여부는 i+1번째 전구에 의해 결정된다.
// 일치 여부 확인할 때는 특정 부분만 보지 말고 전체를 비교하는게 안전
function compare(N, copiedBulb, newBulb) {
  let count = 0;

  for (let i = 1; i < N; i++) {
    if (copiedBulb[i - 1] !== newBulb[i - 1]) {
      copiedBulb[i - 1] = !copiedBulb[i - 1];
      copiedBulb[i] = !copiedBulb[i];
      count++;
      if (i < N - 1) {
        copiedBulb[i + 1] = !copiedBulb[i + 1];
      }
    }
  }

  return copiedBulb.join('') !== newBulb.join('') ? Infinity : count;
}

function solution(N, originBulb, newBulb) {
  const firstCopiedBulb = [...originBulb];
  const secondCopiedBulb = [...originBulb];
  const firstCount = compare(N, firstCopiedBulb, newBulb);

  secondCopiedBulb[0] = !secondCopiedBulb[0];
  secondCopiedBulb[1] = !secondCopiedBulb[1];

  const secondCount = 1 + compare(N, secondCopiedBulb, newBulb);

  if (firstCount === Infinity && secondCount === Infinity) {
    return -1;
  } else {
    return Math.min(firstCount, secondCount);
  }
}
