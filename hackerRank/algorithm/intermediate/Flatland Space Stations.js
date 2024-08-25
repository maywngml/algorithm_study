// 우주 정거장 사이 사이의 구간을 확인하도록 구현
// 처음 생각한 로직도 맞았는데,,예외사항들을 제대로 처리 못 해서
// easy였음에도 푸는데 시간 꽤 걸림 ㅠ
// 배열의 길이가 1이라면 해당 배열의 첫번째 원소와 마지막 원소는 같다는걸 잊지 말자!
function flatlandSpaceStations(n, c) {
  const sortedC = c.sort((a, b) => a - b);
  const sortedCLength = sortedC.length;
  let answer = 0;

  for (let i = 0; i < sortedCLength; i++) {
    if (i === 0) {
      answer = Math.max(answer, sortedC[i]);
    }
    if (i === sortedCLength - 1) {
      answer = Math.max(answer, n - sortedC[sortedCLength - 1] - 1);
    } else {
      answer = Math.max(answer, Math.floor((sortedC[i + 1] - sortedC[i]) / 2));
    }
  }

  return answer;
}
