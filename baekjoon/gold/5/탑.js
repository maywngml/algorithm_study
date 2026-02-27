// 스택
// 배열 원소들을 이전 것과 비교해야 한다면 스택을 생각해보기
function solution(N, buildings) {
  const stack = [];
  const result = Array(N).fill(0);

  for (let i = N - 1; i >= 0; i--) {
    const cur = buildings[i];

    while (stack.length > 0 && stack[stack.length - 1][0] <= cur) {
      result[stack[stack.length - 1][1]] = i + 1;
      stack.pop();
    }

    stack.push([cur, i]);
  }

  while (stack.length > 0) {
    const top = stack.pop();
    result[top[1]] = 0;
  }

  console.log(result.join(' '));
}
