// 문제 링크: https://www.hackerrank.com/challenges/weighted-uniform-string/problem?isFullScreen=true
// 1. s 중복 제거해서 알파벳 종류 저장
// 2. 알파벳 별로 연속되는 문자열 길이의 최댓값을 저장
// 3. 연속되는 문자열 길이가 query보다 크거나 같고 query를 알파벳 가중치로 나눈 나머지가 0인지 확인
function weightedUniformStrings(s, queries) {
  // Write your code here
  const answer = new Array(queries.length).fill('No');
  const alphabets = [...new Set(s.split(''))];
  const alphabetsLength = alphabets.length;
  const alphabetMaxScoreArr = new Array(alphabetsLength).fill(0);
  const queriesLength = queries.length;
  const aCharCodeAt = 97;

  alphabets.forEach((alphabet, index) => {
    const strLengthArr = s
      .split(new RegExp(`[^${alphabet}]`))
      .filter((str) => str !== '')
      .map((str) => str.length);
    const maxStrLength = Math.max(...strLengthArr);
    const alphabetWeight = alphabet.charCodeAt(0) - aCharCodeAt + 1;
    alphabetMaxScoreArr[index] = maxStrLength * alphabetWeight;
  });

  for (let i = 0; i < queriesLength; i++) {
    const query = queries[i];
    for (let j = 0; j < alphabetsLength; j++) {
      const alphabetWeight = alphabets[j].charCodeAt(0) - aCharCodeAt + 1;
      if (alphabetMaxScoreArr[j] >= query && query % alphabetWeight === 0) {
        answer[i] = 'Yes';
        break;
      }
    }
  }

  return answer;
}
