// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/181187

function solution(r1, r2) {
  let count = 0;

  for (let x = 1; x <= r2; x++) {
    const maxY = Math.floor(Math.sqrt(r2 * r2 - x * x));
    const minY = r1 > x ? Math.ceil(Math.sqrt(r1 * r1 - x * x)) : 0;

    count += maxY - minY + 1;
  }

  return count * 4;
}
