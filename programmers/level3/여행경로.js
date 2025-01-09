// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/43164
// 시간 복잡도: O(n⋅n!)

function solution(tickets) {
  const connection = {};
  const ticketsLength = tickets.length;
  const routes = [];

  tickets.forEach(([start, end]) => {
    if (connection[start]) {
      connection[start].push(end);
    } else {
      connection[start] = [end];
    }
  });

  function dfs(currentAirport, route, count) {
    if (count === ticketsLength + 1) {
      routes.push(route);
      return;
    }

    if (!connection[currentAirport]) {
      return;
    }

    connection[currentAirport].forEach((airport, index) => {
      if (airport !== 'X') {
        connection[currentAirport][index] = 'X';
        dfs(airport, `${route},${airport}`, count + 1);
        connection[currentAirport][index] = airport;
      }
    });
  }

  dfs('ICN', 'ICN', 1);
  routes.sort();

  return routes[0].split(',');
}
