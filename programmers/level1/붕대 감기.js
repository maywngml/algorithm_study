// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/250137?language=javascript

function solution(bandage, health, attacks) {
  const attackLength = attacks.length;
  let lastAttackTime = -1;
  let answer = health;

  for (let i = 0; i < attackLength; i++) {
    const [time, amount] = attacks[i];

    if (lastAttackTime > 0) {
      const gap = time - lastAttackTime - 1;
      const add = gap * bandage[1] + Math.floor(gap / bandage[0]) * bandage[2];
      if (answer + add > health) {
        answer = health;
      } else {
        answer += add;
      }
    }
    answer -= amount;
    lastAttackTime = time;

    if (answer <= 0) {
      return -1;
    }
  }

  return answer;
}
