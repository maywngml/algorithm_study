// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/84512

// 처음 풀이 - 만들 수 있는 단어를 모두 만든 후 정렬해서 word의 인덱스를 구하는 방식
// 정답이긴 한데 시간복잡도가 너무 큼, 너무 오래걸려
function solution(word) {
  const alphabets = Array.from({ length: 5 }, () => [
    'A',
    'E',
    'I',
    'O',
    'U',
    '',
  ]);
  const words = new Set();

  const combination = (length, str, checked) => {
    if (length === 0) {
      words.add(str);
      return;
    }

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 6; j++) {
        if (!checked[i][j]) {
          checked[i][j] = true;
          combination(length - 1, str + alphabets[i][j], checked);
          checked[i][j] = false;
        }
      }
    }

    return;
  };

  for (let i = 1; i <= 5; i++) {
    combination(
      i,
      '',
      Array.from({ length: 5 }, () => Array(6).fill(false))
    );
  }

  const sortedWords = [...words].sort();

  return sortedWords.indexOf(word);
}

// gpt 코드
// 규칙을 계산해서 적용
function solution(word) {
  const alphabets = ['A', 'E', 'I', 'O', 'U'];
  const weights = [781, 156, 31, 6, 1]; // 각 자리의 가중치
  let answer = 0;

  for (let i = 0; i < word.length; i++) {
    const index = alphabets.indexOf(word[i]); // 현재 문자의 인덱스
    answer += index * weights[i] + 1; // 가중치 계산 + 1(현재 단어 포함)
  }

  return answer;
}
