// 해시 카테고리인 것을 보고서 해시로 풀긴 했음
// 그런데 다른 풀이들 중에서 적용해볼만했던건
// sort해서 푸는것!! participant, completion 모두
// sort한 뒤에 participant와 completion 앞에서부터
// 비교하면서 둘이 일치하면 completion에서 pop해벌임

function solution(participant, completion) {
  const completionHash = [];
  let answer = '';

  completion.forEach((name) => {
    if (name in completionHash) {
      completionHash[name]++;
    } else {
      completionHash[name] = 1;
    }
  });

  participant.forEach((name, index) => {
    if (name in completionHash && completionHash[name] > 0) {
      completionHash[name]--;
    } else {
      answer = name;
    }
  });

  return answer;
}

// 처음 짠 코드, 효율성 통과 못 함 ^^; 쩝..
function solution(participant, completion) {
  const copiedParticipant = participant;
  let answer;

  completion.forEach((name) => {
    const index = copiedParticipant.findIndex((item) => item === name);
    copiedParticipant.splice(index, 1);
  });

  return copiedParticipant[0];
}

// 최종 정답
function solution(participant, completion) {
  const map = new Map();
  let answer = '';

  participant.forEach((name) => {
    map.set(name, (map.get(name) || 0) + 1);
  });
  completion.forEach((name) => {
    map.set(name, map.get(name) - 1);
  });

  map.forEach((value, key) => {
    if (value > 0) {
      answer = key;
      return key;
    }
  });

  return answer;
}
