// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42578
function solution(clothes) {
  const mapClothes = new Map();
  let answer = 1;

  clothes.forEach(([item, category]) => {
    const count = mapClothes.get(category);
    mapClothes.set(category, count ? count + 1 : 1);
  });

  mapClothes.forEach((value) => {
    answer *= value + 1; // 해당 종류의 의상은 아예 고르지 않았을 경우도 같이 계산
  });

  return answer - 1; // 아무것도 입지 않은 경우를 뺌
}
