// 내 풀이
function solution(absolutes, signs) {
    let answer = 0;
    absolutes.forEach((absolute, index) => {
        const addNum = signs[index] ? absolute : -absolute;
        answer += addNum;
    })
    return answer;
}

// 다른 사람의 풀이
// 1. reduce에서도 index 매개변수로 쓸 수 있음
// 2. 음수 양수를 만들려면 1 or -1을 곱하면 된다
// 3. 식 뒤에 ,초기값 선언할 수 있음
function solution(absolutes, signs) {
    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}

