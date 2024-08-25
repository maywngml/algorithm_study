// 문제 링크: https://www.hackerrank.com/challenges/two-characters/problem?isFullScreen=true
// 1. 문자열에서 중복을 제거하고 가능한 알파벳 조합을 모두 찾음
// 2. 조합을 하나씩 검사해보며 해당 조합에 해당하지 않는 알파벳은 모두 삭제
// 3. 연속되는 알파벳이 나오는지 확인
// easy였지만,, 1시간이 걸려버렸다...ㅠ
// 다른 알고리즘이 있을 것 같아서 생각을 오래했는데 그냥 빡 구현이 맞았음
// 조건이 크지 않으면 다 돌려보는게 맞는듯
function alternate(s) {
  const noDuplication = [...new Set(s.split(''))];
  const noDuplicationLength = noDuplication.length;
  const stringList = [];
  let answer = 0;

  for (let i = 0; i < noDuplicationLength - 1; i++) {
    for (let j = i + 1; j < noDuplicationLength; j++) {
      stringList.push(`${noDuplication[i]}${noDuplication[j]}`);
    }
  }

  stringList.forEach((item) => {
    const deletedString = s.replace(
      new RegExp(`[^${item[0]}${item[1]}]`, 'g'),
      ''
    );
    if (
      deletedString.indexOf(`${item[0]}${item[0]}`) === -1 &&
      deletedString.indexOf(`${item[1]}${item[1]}`) === -1
    ) {
      answer = Math.max(answer, deletedString.length);
    }
  });

  return answer;
}
