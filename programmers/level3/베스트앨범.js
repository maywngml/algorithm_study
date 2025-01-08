// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42579
// 시간복잡도: O(nlogn)

function solution(genres, plays) {
  const genreIndexs = new Map();
  const genrePlays = new Map();
  const totalPlays = [];
  const answer = [];

  genres.forEach((genre, index) => {
    const play = plays[index];
    const genreIndex = genreIndexs.get(genre);

    if (genreIndex !== undefined) {
      totalPlays[genreIndex][1] += play;
      genrePlays.get(genre).push([index, play]);
    } else {
      totalPlays.push([genre, play]);
      genreIndexs.set(genre, genreIndexs.size);
      genrePlays.set(genre, [[index, play]]);
    }
  });

  totalPlays.sort((a, b) => b[1] - a[1]);

  totalPlays.forEach(([genre, playCount]) => {
    const array = genrePlays.get(genre).sort((a, b) => b[1] - a[1]);
    answer.push(array[0][0]);
    if (array.length > 1) {
      answer.push(array[1][0]);
    }
  });

  return answer;
}
