// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/60058?language=javascript
// 시간 복잡도: O(n^2)

const split = (str) => {
  const length = str.length;
  let openCount = 0,
    closeCount = 0,
    lastIndex = 0;

  for (let i = 0; i < length; i++) {
    if (str[i] === '(') {
      openCount++;
    } else {
      closeCount++;
    }
    if (openCount === closeCount) {
      lastIndex = i;
      break;
    }
  }

  return [str.slice(0, lastIndex + 1), str.slice(lastIndex + 1)];
};

const isCorrect = (str) => {
  const stack = [];

  for (const char of str) {
    const top = stack[stack.length - 1];
    if (top === '(') {
      if (char === ')') {
        stack.pop();
      } else {
        stack.push(char);
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
};

const combine = (str) => {
  if (str === '') {
    return '';
  }

  const [u, v] = split(str);

  if (isCorrect(u)) {
    return u + combine(v);
  } else {
    const length = u.length;
    let result = `(${combine(v)})`;
    for (let i = 1; i < length - 1; i++) {
      result += u[i] === '(' ? ')' : '(';
    }
    return result;
  }
};

function solution(p) {
  return combine(p);
}
