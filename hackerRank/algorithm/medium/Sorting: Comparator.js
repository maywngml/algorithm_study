// 문제 링크: https://www.hackerrank.com/challenges/ctci-comparator-sorting/problem?isFullScreen=true
function processData(input) {
  //Enter your code here
  const splitedInput = input.split('\n');

  splitedInput.shift(0);

  const transformedSplitedInput = splitedInput.map((input) => input.split(' '));
  transformedSplitedInput.sort(
    ([firstPlayer, firstScore], [secondPlayer, secondScore]) => {
      if (firstScore === secondScore) {
        if (firstPlayer > secondPlayer) {
          return 1;
        } else if (firstPlayer < secondPlayer) {
          return -1;
        } else {
          return 0;
        }
      } else {
        return secondScore - firstScore;
      }
    }
  );

  console.log(transformedSplitedInput.join('\n').replaceAll(',', ' '));
}
