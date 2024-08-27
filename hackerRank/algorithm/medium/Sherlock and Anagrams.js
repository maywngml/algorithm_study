// 문제 링크: https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem?isFullScreen=true
// s 길이가 100보다 작아서 완탐으로 진행
// 만들 수 있는 모든 부분 문자열을 구하고 각 문자열의 개수를 구함 (문자열은 정렬해서 만들기)
// 부분 문자열의 개수가 2이상이면 조합 공식 사용해서 애너그램 문자열 개수 더함
function sherlockAndAnagrams(s) {
  // Write your code here
  const sLength = s.length;
  const subString = new Map();
  let answer = 0;

  for (let i = 1; i < sLength; i++) {
    for (let j = 0; j <= sLength - i; j++) {
      const newSubString = s
        .slice(j, j + i)
        .split('')
        .sort()
        .join('');
      const subStringCount = subString.has(newSubString)
        ? subString.get(newSubString) + 1
        : 1;
      subString.set(newSubString, subStringCount);
    }
  }

  subString.forEach((value) => {
    if (value > 1) {
      answer += Math.floor((value * (value - 1)) / 2);
    }
  });

  return answer;
}
