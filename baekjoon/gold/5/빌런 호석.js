// 구현
// 7 표현 방법을 착각해서 틀렸었음
function solution(N, K, P, X) {
  const info = [
    [0, 4, 3, 3, 4, 3, 2, 3, 1, 2],
    [4, 0, 5, 3, 2, 5, 6, 1, 5, 4],
    [3, 5, 0, 2, 5, 4, 3, 4, 2, 3],
    [3, 3, 2, 0, 3, 2, 3, 2, 2, 1],
    [4, 2, 5, 3, 0, 3, 4, 3, 3, 2],
    [3, 5, 4, 2, 3, 0, 1, 4, 2, 1],
    [2, 6, 3, 3, 4, 1, 0, 5, 1, 2],
    [3, 1, 4, 2, 3, 4, 5, 0, 4, 3],
    [1, 5, 2, 2, 3, 2, 1, 4, 0, 1],
    [2, 4, 3, 1, 2, 1, 2, 3, 1, 0],
  ];
  const origin = X.toString().padStart(K, '0').split('');
  let result = 0;

  for (let i = 1; i <= N; i++) {
    if (i === X) continue;

    const current = i.toString().padStart(K, '0').split('');
    let total = 0;

    for (let j = 0; j < K; j++) {
      total += info[+origin[j]][+current[j]];
      if (total > P) {
        break;
      }
    }

    if (total >= 1 && total <= P) {
      result++;
    }
  }

  console.log(result);
}
