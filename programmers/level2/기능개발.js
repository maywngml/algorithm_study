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
