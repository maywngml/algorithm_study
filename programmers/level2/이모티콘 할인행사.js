// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/150368
// 시간 복잡도: O(256•n•m)

function solution(users, emoticons) {
  const emoticonSize = emoticons.length;
  const userSize = users.length;
  const saleRate = [10, 20, 30, 40];
  const answer = [-1, -1];

  const calcuate = (currentSaleRate) => {
    let plusCount = 0,
      sales = 0;

    for (let i = 0; i < userSize; i++) {
      const [ratio, price] = users[i];
      let total = 0;
      for (let j = 0; j < emoticonSize; j++) {
        if (currentSaleRate[j] >= ratio) {
          total += emoticons[j] * (1 - currentSaleRate[j] / 100);
        }
      }
      if (total >= price) {
        plusCount++;
      } else {
        sales += total;
      }
    }

    return [plusCount, sales];
  };

  const bfs = (currentSaleRate) => {
    if (currentSaleRate.length === emoticonSize) {
      const [plusCount, sales] = calcuate(currentSaleRate);
      if (plusCount > answer[0]) {
        answer[0] = plusCount;
        answer[1] = sales;
      } else if (plusCount === answer[0]) {
        answer[1] = Math.max(answer[1], sales);
      }
      return;
    }

    for (let i = 0; i < 4; i++) {
      bfs([...currentSaleRate, saleRate[i]]);
    }
  };

  for (let i = 0; i < 4; i++) {
    bfs([saleRate[i]]);
  }

  return answer;
}
