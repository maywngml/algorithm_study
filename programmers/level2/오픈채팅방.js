// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42888
// 시간복잡도: O(n)

function solution(record) {
  const nicknames = new Map();
  const chatRecords = [];
  const answer = [];

  record.forEach((item) => {
    const [action, userId, nickname] = item.split(' ');

    if (action !== 'Change') {
      chatRecords.push([action, userId]);
    }
    if (action !== 'Leave') {
      nicknames.set(userId, nickname);
    }
  });

  chatRecords.forEach((chatRecord) => {
    const [action, userId] = chatRecord;
    const result = `${nicknames.get(userId)}님이 ${
      action === 'Enter' ? '들어왔습니다.' : '나갔습니다.'
    }`;
    answer.push(result);
  });

  return answer;
}
