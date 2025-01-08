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

function isPrime(number) {
  const halfNumber = Math.floor(number / 2);
  let result = true;

  if (number === 0 || number === 1) {
    return false;
  }

  for (let i = 2; i <= halfNumber; i++) {
    if (number % i === 0) {
      result = false;
      break;
    }
  }

  return result;
}

// 다시 풀이
// 시간복잡도: O(n * n!)
function solution(numbers) {
  const splitedNumbers = numbers.split('');
  const splitedNumbersLength = splitedNumbers.length;
  const combinatedNumbers = new Set();
  let answer = 0;

  function combination(length, str, checked) {
    if (length === 0) {
      combinatedNumbers.add(+str);
      return;
    }

    for (let i = 0; i < splitedNumbersLength; i++) {
      if (!checked[i]) {
        checked[i] = true;
        combination(length - 1, str + splitedNumbers[i], checked);
        checked[i] = false;
      }
    }
    return;
  }

  for (let i = 1; i <= splitedNumbersLength; i++) {
    combination(i, '', Array(i).fill(false));
  }

  for (const number of combinatedNumbers.values()) {
    if (isPrime(number)) {
      answer++;
    }
  }

  return answer;
}
