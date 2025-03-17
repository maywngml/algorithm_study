//  문제 링크: https://www.hackerrank.com/challenges/ctci-ransom-note/problem?isFullScreen=true
// 시간 복잡도: O(n)

function checkMagazine(magazine, note) {
  // Write your code here
  const magazineMap = new Map();
  const noteMap = new Map();
  let result = 'Yes';

  magazine.forEach((word) => {
    magazineMap.set(word, (magazineMap.get(word) || 0) + 1);
  });

  note.forEach((word) => {
    noteMap.set(word, (noteMap.get(word) || 0) + 1);
  });

  note.forEach((word) => {
    if (!magazineMap.has(word) || magazineMap.get(word) < noteMap.get(word)) {
      result = 'No';
      return -1;
    }
  });

  console.log(result);
}
