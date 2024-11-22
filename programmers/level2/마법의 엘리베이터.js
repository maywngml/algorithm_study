// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/148653#
// 시간복잡도: O(logn)

function solution(storey) {
  let button = 1,
    answer = 0;

  while (storey !== 0) {
    const quotientStr = Math.floor(storey / button).toString();
    const lastCharQuotient = +quotientStr.charAt(quotientStr.length - 1);
    const remainingToTen = 10 - lastCharQuotient;

    if (lastCharQuotient > 5) {
      answer += remainingToTen;
      storey += button * remainingToTen;
    } else if (lastCharQuotient === 5) {
      const secondLastCharQuotient = +quotientStr.charAt(
        quotientStr.length - 2
      );
      if (secondLastCharQuotient >= 5) {
        answer += remainingToTen;
        storey += button * remainingToTen;
      } else {
        answer += remainingToTen;
        storey -= button * remainingToTen;
      }
    } else {
      answer += lastCharQuotient;
      storey -= button * lastCharQuotient;
    }
    button *= 10;
  }

  return answer;
}
