// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42577
// 타임 초과가 날 것 같긴 했는데,, 여시나 ㅎ 효율성 문제 2개 틀림
function solution(phone_book) {
  const sortedPhoneBook = [...phone_book].sort();
  const phoneBookLength = phone_book.length;
  let answer = true;

  for (let i = 0; i < phoneBookLength - 1; i++) {
    let check = false;
    for (let j = i + 1; j < phoneBookLength; j++) {
      if (
        sortedPhoneBook[i].length < sortedPhoneBook[j] &&
        sortedPhoneBook[j].indexOf(sortedPhoneBook[i]) === 0
      ) {
        check = true;
        answer = false;
        break;
      }
    }
    if (check) break;
  }

  return answer;
}

// 위에서는 모든 요소들을 서로 비교하느라 시간복잡도가 O(n^2) 이었는데
// 생각해보니 문자를 정렬한 뒤에는 바로 뒤의 원소랑만 비교해주면 된다는걸 깨달음
// 문자열을 정렬해뒀는데 바로 뒤의 원소의 접두어가 아니다? 그 다음 원소는 확인해볼 필요가 없지
function solution(phone_book) {
  const sortedPhoneBook = [...phone_book].sort();
  const phoneBookLength = phone_book.length;
  let answer = true;

  for (let i = 0; i < phoneBookLength - 1; i++) {
    if (sortedPhoneBook[i + 1].indexOf(sortedPhoneBook[i]) === 0) {
      answer = false;
      break;
    }
  }

  return answer;
}
