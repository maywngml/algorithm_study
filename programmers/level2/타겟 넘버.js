// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/43165?language=javascript

const solution = (numbers, target) => {
  const numbersLength = numbers.length;
  let answer = 0;

  const dfs = (total, index) => {
    if (index === numbersLength) {
      if (total === target) {
        answer++;
      }
      return;
    }

    dfs(total + numbers[index], index + 1);
    dfs(total - numbers[index], index + 1);
  };

  dfs(0, 0);

  return answer;
};
