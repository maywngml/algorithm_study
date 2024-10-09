// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/258712
// 쌩구현이었다. friends 배열의 인덱스 가지고 2차원 배열 만들어서 선물 몇개 주고 받았는지 저장하고
// 그거 바탕으로 선물지수 계산하고 조건 주어진 대로 계산하면 된다.

function solution(friends, gifts) {
  const friendsIndex = new Map();
  const friendsCount = friends.length;
  const giftCountTable = Array.from({ length: friendsCount }, () =>
    Array(friendsCount).fill(0)
  );
  const visited = Array.from({ length: friendsCount }, () =>
    Array(friendsCount).fill(false)
  );
  const friendsGiftIndex = Array(friendsCount).fill(0);
  const nextGiftCount = Array(friendsCount).fill(0);

  friends.forEach((friend, index) => {
    friendsIndex.set(friend, index);
  });

  gifts.forEach((gift) => {
    const [givedFriend, receivedFriend] = gift.split(' ');
    const givedFriendIndex = friendsIndex.get(givedFriend);
    const receivedFriendIndex = friendsIndex.get(receivedFriend);
    giftCountTable[givedFriendIndex][receivedFriendIndex]++;
  });

  for (let i = 0; i < friendsCount; i++) {
    const givedCount = giftCountTable[i].reduce(
      (count, total) => count + total,
      0
    );
    let receivedCount = 0;
    for (let j = 0; j < friendsCount; j++) {
      receivedCount += giftCountTable[j][i];
    }
    friendsGiftIndex[i] = givedCount - receivedCount;
  }

  for (let i = 0; i < friendsCount; i++) {
    visited[i][i] = true;
  }

  for (let i = 0; i < friendsCount; i++) {
    for (let j = 0; j < friendsCount; j++) {
      if (visited[i][j]) continue;

      if (
        (giftCountTable[i][j] === 0 && giftCountTable[j][i] === 0) ||
        giftCountTable[i][j] === giftCountTable[j][i]
      ) {
        if (friendsGiftIndex[i] > friendsGiftIndex[j]) {
          nextGiftCount[i]++;
        } else if (friendsGiftIndex[i] < friendsGiftIndex[j]) {
          nextGiftCount[j]++;
        }
      } else {
        if (giftCountTable[i][j] > giftCountTable[j][i]) {
          nextGiftCount[i]++;
        } else {
          nextGiftCount[j]++;
        }
      }

      visited[i][j] = true;
      visited[j][i] = true;
    }
  }

  return Math.max(...nextGiftCount);
}
