// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/67256
// 시간복잡도: O(n)

function solution(numbers, hand) {
  const keypad = {};
  const leftNumbers = [1, 4, 7];
  const rightNumbers = [3, 6, 9];
  let left = 10,
    right = 12;
  let answer = '';

  for (let i = 0; i < 12; i++) {
    keypad[i + 1] = [Math.floor(i / 3), i % 3];
  }

  numbers.forEach((item) => {
    let number = item === 0 ? 11 : item;

    if (leftNumbers.includes(number)) {
      left = number;
      answer += 'L';
    } else if (rightNumbers.includes(number)) {
      right = number;
      answer += 'R';
    } else {
      const leftDistance =
        Math.abs(keypad[left][0] - keypad[number][0]) +
        Math.abs(keypad[left][1] - keypad[number][1]);
      const rightDistance =
        Math.abs(keypad[right][0] - keypad[number][0]) +
        Math.abs(keypad[right][1] - keypad[number][1]);

      if (leftDistance > rightDistance) {
        right = number;
        answer += 'R';
      } else if (leftDistance < rightDistance) {
        left = number;
        answer += 'L';
      } else {
        if (hand === 'left') {
          left = number;
          answer += 'L';
        } else {
          right = number;
          answer += 'R';
        }
      }
    }
  });

  return answer;
}
