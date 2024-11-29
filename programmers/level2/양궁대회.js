// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/92342#
// 시간복잡도: O(11 * 2^11)

const solution = (n, info) => {
  const ryanShots = Array(11).fill(0);
  let finalShots = [-1],
    finalScoreDifference = 0;

  const dfs = (index, arrowCount, appeachScore, ryanScore, ryanShots) => {
    if (index === 10) {
      const tempShots = [...ryanShots];
      const scoreDifference = ryanScore - appeachScore;

      tempShots[index] += arrowCount;

      if (scoreDifference > finalScoreDifference) {
        finalShots = tempShots;
        finalScoreDifference = scoreDifference;
      } else if (
        scoreDifference === finalScoreDifference &&
        scoreDifference > 0
      ) {
        for (let i = 10; i >= 0; i--) {
          if (finalShots[i] > tempShots[i]) {
            break;
          } else if (finalShots[i] < tempShots[i]) {
            finalShots = tempShots;
            break;
          }
        }
      }
      return;
    }

    if (arrowCount > info[index]) {
      const newRyanShots = [...ryanShots];
      const usedArrowCount = info[index] + 1;
      newRyanShots[index] = usedArrowCount;
      dfs(
        index + 1,
        arrowCount - usedArrowCount,
        appeachScore,
        ryanScore + (10 - index),
        newRyanShots
      );
    }

    dfs(
      index + 1,
      arrowCount,
      appeachScore + (info[index] > 0 ? 10 - index : 0),
      ryanScore,
      [...ryanShots]
    );
  };

  dfs(0, n, 0, 0, ryanShots);

  return finalShots;
};
