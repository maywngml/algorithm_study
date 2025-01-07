// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/17680
// 시간복잡도: O(n * m)

function solution(cacheSize, cities) {
  const cache = [];
  let answer = 0;

  if (cacheSize === 0) {
    return cities.length * 5;
  }

  cities.forEach((city) => {
    const lowerCity = city.toLowerCase();
    const index = cache.findIndex((item) => item === lowerCity);

    if (index === -1) {
      answer += 5;
      if (cache.length === cacheSize) {
        cache.shift();
      }
      cache.push(lowerCity);
    } else {
      answer++;
      cache.splice(index, 1);
      cache.push(lowerCity);
    }
  });

  return answer;
}
