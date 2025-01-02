// 문제 링크: https://www.hackerrank.com/challenges/fibonacci-modified/problem?isFullScreen=true
// 시간복잡도: O(n)

function fibonacciModified(t1, t2, n) {
  // Write your code here
  const arr = [BigInt(t1), BigInt(t2)];

  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 2] + arr[i - 1] * arr[i - 1];
  }

  return arr[n - 1];
}
