// 문제링크: https://school.programmers.co.kr/learn/courses/30/lessons/42586
function solution(progresses, speeds) {
  const length = progresses.length;
  const deploy = [];
  const answer = [];
  let previousDeploy,
    count = 1;

  for (let i = 0; i < length; i++) {
    const quotient = Math.floor((100 - progresses[i]) / speeds[i]);
    const remainder = (100 - progresses[i]) % speeds[i];
    deploy.push(remainder === 0 ? quotient : quotient + 1);
  }

  previousDeploy = deploy[0];

  for (let i = 1; i < length; i++) {
    if (previousDeploy < deploy[i]) {
      answer.push(count);
      previousDeploy = deploy[i];
      count = 1;
    } else {
      count++;
    }
  }

  answer.push(count);

  return answer;
}

// 두번째 풀이
function solution(progresses, speeds) {
  const queue = [];
  const answer = [];
  let maxDay = -1;

  progresses.forEach((progress, index) => {
    const remainingProgress = 100 - progress;
    const speed = speeds[index];
    const day =
      Math.floor(remainingProgress / speed) +
      (remainingProgress % speed > 0 ? 1 : 0);
    queue.push(day);
  });

  while (queue.length > 0) {
    const currentDay = queue.shift();

    if (maxDay < currentDay) {
      maxDay = Math.max(maxDay, currentDay);
      answer.push(1);
    } else {
      answer[answer.length - 1]++;
    }
  }

  return answer;
}
