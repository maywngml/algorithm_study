// 문제 링크: https://www.hackerrank.com/challenges/fraudulent-activity-notifications/problem?isFullScreen=true
// 타임 에러 났움돠
function activityNotifications(expenditure, d) {
  // Write your code here
  const expenditureLength = expenditure.length;
  let answer = 0;

  for (let i = d; i < expenditureLength; i++) {
    const subArr = expenditure.slice(i - d, i).sort((a, b) => a - b);
    const halfSubArrLength = Math.floor(d / 2);
    let median = 0;
    if (d % 2 === 0) {
      median = (subArr[halfSubArrLength] + subArr[halfSubArrLength - 1]) / 2;
    } else {
      median = subArr[halfSubArrLength];
    }
    if (expenditure[i] >= median * 2) {
      answer++;
    }
  }

  return answer;
}

// 1. 정렬된 부분 배열을 미리 만들어놓음
// 2. 반복문 진행하면서 오래된 데이터는 부분 배열에서 제거하고, 새로운 데이터를 부분 배열에 넣음 (정렬을 반복문마다 진행하지 않아도 됨)
function activityNotifications(expenditure, d) {
  // Write your code here
  const expenditureLength = expenditure.length;
  const subArr = expenditure.slice(0, d).sort((a, b) => a - b);
  const halfSubArrLength = Math.floor(d / 2);
  let answer = 0;

  for (let i = d; i < expenditureLength; i++) {
    let median = 0;
    if (d % 2 === 0) {
      median = (subArr[halfSubArrLength] + subArr[halfSubArrLength - 1]) / 2;
    } else {
      median = subArr[halfSubArrLength];
    }
    if (expenditure[i] >= median * 2) {
      answer++;
    }

    const oldNum = expenditure[i - d];
    const newNum = expenditure[i];
    subArr.splice(subArr.indexOf(oldNum), 1);

    const newNumIndex = subArr.findIndex((item) => item > newNum);
    if (newNumIndex) {
      subArr.splice(newNumIndex, 0, newNum);
    } else {
      subArr.push(newNum);
    }
  }

  return answer;
}
