// 링크: https://www.hackerrank.com/challenges/three-month-preparation-kit-torque-and-development/problem?isFullScreen=true
// 시간복잡도: O(n + m)

function roadsAndLibraries(n, c_lib, c_road, cities) {
  const roads = Array.from({ length: n + 1 }, () => []);
  const visited = Array(n + 1).fill(false);
  let total = 0;

  const dfs = (start) => {
    const stack = [start];
    let citiesCount = 1;

    visited[start] = true;

    while (stack.length > 0) {
      const currentCity = stack.pop();

      roads[currentCity]?.forEach((city) => {
        if (!visited[city]) {
          stack.push(city);
          citiesCount++;
          visited[city] = true;
        }
      });
    }
    return Math.min(c_lib * citiesCount, c_lib + c_road * (citiesCount - 1));
  };

  cities.forEach(([start, end]) => {
    roads[start].push(end);
    roads[end].push(start);
  });

  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      total += dfs(i);
    }
  }

  return total;
}
