// 폰켓몬의 종류 갯수를 구하고
// 폰켓문 갯수/2, 폰켓몬 종류 갯수 중 큰 수가 정답
// 갯수만 알면 어차피 폰켓몬을 선택하는 방법? 까지는
// 고려하지 않아도 됨, 답은 갯수만 구하는거니까

function solution(nums) {
    const halfNumsLength = nums.length / 2;
    const ponketmonCnt = new Set(nums).size;
    const  answer = Math.min(halfNumsLength, ponketmonCnt);
    
    return answer;
}