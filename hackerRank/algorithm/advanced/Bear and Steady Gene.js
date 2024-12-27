// 문제 링크: https://www.hackerrank.com/challenges/bear-and-steady-gene/problem?isFullScreen=true
// 시간 복잡도: O(n)

function steadyGene(gene) {
  const n = gene.length;
  const quarterN = Math.floor(n / 4);
  const count = { A: 0, C: 0, G: 0, T: 0 };
  const check = { A: 0, C: 0, G: 0, T: 0 };
  const excess = {};
  let left = 0,
    minLength = n;

  for (const item of gene) {
    count[item]++;
  }

  Object.entries(count).forEach(([key, value]) => {
    excess[key] = Math.max(0, value - quarterN);
  });

  if (Object.values(excess).every((item) => item === 0)) {
    return 0;
  }

  for (let right = 0; right < n; right++) {
    check[gene[right]]++;

    while (
      Object.entries(excess).every(([key, value]) => check[key] >= value)
    ) {
      minLength = Math.min(minLength, right - left + 1);
      check[gene[left]]--;
      left++;
    }
  }

  return minLength;
}
