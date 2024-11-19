// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/118666

function solution(survey, choices) {
  const characters = [
    ['R', 'T'],
    ['C', 'F'],
    ['J', 'M'],
    ['A', 'N'],
  ];
  const points = [0, 3, 2, 1, 0, 1, 2, 3];
  const total = {};
  let answer = '';

  characters.forEach((character) => {
    total[character[0]] = 0;
    total[character[1]] = 0;
  });

  survey.forEach((character, index) => {
    const choice = choices[index];

    if (choice > 4) {
      total[character[1]] += points[choice];
    } else {
      total[character[0]] += points[choice];
    }
  });

  characters.forEach((character) => {
    const [first, second] = character;

    if (total[first] >= total[second]) {
      answer += first;
    } else {
      answer += second;
    }
  });

  return answer;
}
