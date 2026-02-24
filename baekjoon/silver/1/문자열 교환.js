// 연속 구간, 슬라이딩 윈도우
function solution(str) {
  const totalLength = str.length;
  let aCount = 0,
    bCount = 0;

  for (const char of str) {
    if (char === 'a') {
      aCount++;
    } else {
      bCount++;
    }
  }

  let targetCount,
    targetChar,
    changeCount = 0;

  if (aCount >= bCount) {
    targetCount = bCount;
    targetChar = 'b';
  } else {
    targetCount = aCount;
    targetChar = 'a';
  }

  for (let i = 0; i < targetCount; i++) {
    if (str[i] !== targetChar) {
      changeCount++;
    }
  }

  let result = changeCount;

  for (let i = targetCount; i < totalLength + targetCount; i++) {
    if (str[(i - targetCount) % totalLength] !== targetChar) {
      changeCount--;
    }

    if (str[i % totalLength] !== targetChar) {
      changeCount++;
    }

    result = Math.min(result, changeCount);
    if (result === 0) {
      break;
    }
  }

  console.log(result);
}
