// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/43163

const canChange = (word1, word2) => {
  const length = word1.length;
  let count = 0;

  for (let i = 0; i < length; i++) {
    if (word1[i] !== word2[i]) {
      count++;
    }
    if (count > 1) {
      break;
    }
  }

  return count > 1 ? false : true;
};

function solution(begin, target, words) {
  const connection = new Map();
  const length = words.length;
  let answer = 0;

  for (let i = -1; i < length; i++) {
    let currentWord = i === -1 ? begin : words[i];
    for (let j = 0; j < length; j++) {
      if (canChange(currentWord, words[j])) {
        if (connection.has(currentWord)) {
          connection.get(currentWord).push(words[j]);
        } else {
          connection.set(currentWord, [words[j]]);
        }
      }
    }
  }

  const queue = [[begin, 0]];
  const visited = new Set();

  while (queue.length > 0) {
    const [currentWord, currentCount] = queue.shift();

    if (currentWord === target) {
      answer = currentCount;
      break;
    }
    if (!visited.has(currentWord)) {
      visited.add(currentWord);
      connection.get(currentWord)?.forEach((nextWord) => {
        if (!visited.has(nextWord)) {
          queue.push([nextWord, currentCount + 1]);
        }
      });
    }
  }

  return answer;
}
