'use strict';

// 큰 숫자에는 BigInt 자료형을 사용해라

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'extraLongFactorials' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function extraLongFactorials(n) {
  // Write your code here
  let answer = BigInt(1);

  for (let i = 2; i <= n; i++) {
    answer *= BigInt(i);
  }

  console.log(answer.toString());
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  extraLongFactorials(n);
}
