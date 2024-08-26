// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42584?language=javascript
// 그럴 줄 알았지만 효율성에서 갈렸습니다. 오답!
function solution(prices) {
  const pricesLength = prices.length;
  const answer = [];

  for (let i = 0; i < pricesLength; i++) {
    const currentPrice = prices[i];
    const decreaseIndex = prices
      .slice(i + 1)
      .findIndex((item) => item < currentPrice);

    if (decreaseIndex === -1) {
      answer.push(pricesLength - i - 1);
    } else {
      answer.push(decreaseIndex + 1);
    }
  }

  return answer;
}

// 이거 그냥 전체 다 확인해도 되는거였음..
// 괜히 머리 썼다..근데 효율성은 이 방법이 더 높긴 해...잘했어 ^^
function solution(prices) {
  const pricesLength = prices.length;
  const difference = new Array(pricesLength).fill(0);
  const answer = new Array(pricesLength).fill(0);

  for (let i = 1; i < pricesLength; i++) {
    difference[i] = prices[i] - prices[i - 1];
  }

  for (let i = 0; i < pricesLength; i++) {
    let total = 0;
    for (let j = i + 1; j < pricesLength; j++) {
      total += difference[j];
      if (total < 0) {
        answer[i] = j - i;
        break;
      }
    }
    if (total >= 0) {
      answer[i] = pricesLength - i - 1;
    }
  }

  return answer;
}
