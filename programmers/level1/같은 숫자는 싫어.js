// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/12906?language=javascript
// 괜히 복잡하게 풀려고 했음...그냥 반복문 써서 원소 하나씩 확인해봄면 됨.
function solution(arr) {
  const answer = [arr[0]];
  let previousNumber = arr[0];

  arr.forEach((number) => {
    if (number !== previousNumber) {
      answer.push(number);
      previousNumber = number;
    }
  });

  return answer;
}
