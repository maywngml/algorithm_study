// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/131704#

// 시간 복잡도: O(nm)
function solution(order) {
  const orderLength = order.length;
  const subBoxes = [];
  let currentBox = 1;
  let answer = 0;

  for (let i = 0; i < orderLength; i++) {
    const currentOrder = order[i];
    if (currentOrder === currentBox) {
      currentBox++;
    } else if (currentOrder > currentBox) {
      const nextBoxIndex = currentOrder + 1;
      for (let i = currentBox; i < currentOrder; i++) {
        subBoxes.push(i);
      }
      currentBox = nextBoxIndex;
    } else {
      if (currentOrder !== subBoxes.pop()) {
        break;
      }
    }
    answer++;
  }

  return answer;
}

// 런타임 에러 - 쩝.. 그럴 것 같긴 했어
function solution(order) {
  const orderLength = order.length;
  const boxes = [];
  const subBoxes = [];
  let orderIndex = 0;
  let answer = 0;

  for (let i = 0; i < orderLength; i++) {
    boxes.push(i + 1);
  }

  while (boxes.length > 0 || subBoxes.length > 0) {
    const currentOrder = order[orderIndex];
    const indexInBoxes = boxes.indexOf(currentOrder);
    if (indexInBoxes === 0) {
      boxes.shift();
    } else if (indexInBoxes === -1) {
      if (currentOrder !== subBoxes.pop()) {
        break;
      }
    } else {
      subBoxes.push(...boxes.slice(0, indexInBoxes));
      boxes.splice(0, indexInBoxes + 1);
    }
    orderIndex++;
    answer++;
  }

  return answer;
}
