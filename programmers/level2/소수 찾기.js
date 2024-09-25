// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42839?language=javascript

const isInNumbers = (check, number) => {
  const copiedCheck = [...check];
  let result = true;

  number
    .toString()
    .split('')
    .forEach((number) => {
      if (copiedCheck[number] > 0) {
        copiedCheck[number]--;
      } else {
        result = false;
        return false;
      }
    });

  return result;
};

const isPrime = (number) => {
  const halfNumber = Math.floor(number / 2);
  let result = true;

  for (let i = 2; i <= halfNumber; i++) {
    if (number % i === 0) {
      result = false;
      break;
    }
  }

  return result;
};

function solution(numbers) {
  const check = Array(10).fill(0);
  const maxNumber = numbers
    .split('')
    .sort((a, b) => b - a)
    .join('');
  let answer = 0;

  numbers.split('').forEach((number) => check[+number]++);

  for (let i = 2; i <= maxNumber; i++) {
    if (isInNumbers(check, i) && isPrime(i)) {
      answer++;
    }
  }

  return answer;
}
