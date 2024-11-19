// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/161990

function solution(wallpaper) {
  let minX = 51,
    minY = 51,
    maxX = 0,
    maxY = 0;

  wallpaper.forEach((paper, outerIndex) => {
    const cells = paper.split('');
    cells.forEach((cell, innerIndex) => {
      if (cell === '#') {
        minX = Math.min(minX, outerIndex);
        minY = Math.min(minY, innerIndex);
        maxX = Math.max(maxX, outerIndex + 1);
        maxY = Math.max(maxY, innerIndex + 1);
      }
    });
  });

  return [minX, minY, maxX, maxY];
}
