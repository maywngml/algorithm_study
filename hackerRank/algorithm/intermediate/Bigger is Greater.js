// 처음에 작성한 코드 틀렸음
// swap한 기준점 뒤의 문자열을 오름차순 정렬 해줬어야 함
function biggerIsGreater(w) {
  // Write your code here
  const wordArray = w.split('');
  const wordLength = wordArray.length;
  let newWord = '';
  for (let i = wordLength - 1; i > 0; i--) {
    let swap = false;
    for (let j = i - 1; j >= 0; j--) {
      if (wordArray[i] > wordArray[j]) {
        const temp = wordArray[i];
        wordArray[i] = wordArray[j];
        wordArray[j] = temp;
        swap = true;
        break;
      }
    }
    if (swap) {
      break;
    }
  }

  newWord = wordArray.join('');

  if (newWord === w) {
    return 'no answer';
  } else {
    return newWord;
  }
}

// 정답
// 오름차순 정렬 추가
function biggerIsGreater(w) {
  // Write your code here
  const wordArray = w.split('');
  const wordLength = wordArray.length;
  const swapIndex = [-1, -1];

  for (let i = wordLength - 2; i >= 0; i--) {
    for (let j = i + 1; j < wordLength; j++) {
      if (wordArray[i] < wordArray[j]) {
        if (swapIndex[1] >= 0) {
          if (wordArray[j] < wordArray[swapIndex[1]]) {
            swapIndex[1] = j;
          }
        } else {
          swapIndex[1] = j;
        }
      }
    }
    if (swapIndex[1] >= 0) {
      const temp = wordArray[i];
      wordArray[i] = wordArray[swapIndex[1]];
      wordArray[swapIndex[1]] = temp;
      swapIndex[0] = i;
      break;
    }
  }

  if (swapIndex[0] === -1) {
    return 'no answer';
  } else {
    return [
      ...wordArray.slice(0, swapIndex[0] + 1),
      ...wordArray.slice(swapIndex[0] + 1).sort(),
    ].join('');
  }
}

// 위의 코드는 너무 중첩문이 많아서
// 지피티한테 리팩터링 해달라고 함 코드가 매우 간결하고 깔끔
function biggerIsGreater(w) {
  const wordArray = w.split('');
  const wordLength = wordArray.length;

  // 첫 번째 감소하는 요소를 찾습니다.
  let i;
  for (i = wordLength - 2; i >= 0; i--) {
    if (wordArray[i] < wordArray[i + 1]) {
      break;
    }
  }

  if (i < 0) {
    return 'no answer';
  }

  // i보다 큰 첫 번째 요소를 찾습니다.
  let j;
  for (j = wordLength - 1; j > i; j--) {
    if (wordArray[j] > wordArray[i]) {
      break;
    }
  }

  // i와 j를 교환합니다.
  [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];

  // i 이후의 요소를 정렬합니다.
  const result = [
    ...wordArray.slice(0, i + 1),
    ...wordArray.slice(i + 1).sort(),
  ];

  return result.join('');
}
