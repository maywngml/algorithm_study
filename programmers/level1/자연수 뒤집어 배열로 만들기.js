// 내가 작성한 코드
// 숫자 문자열로 변경해서 품
function solution(n) {
    const answer = (n + "").split("").reverse().map(x => parseInt(x));
    return answer;
}

// 다른 사람 코드
// 숫자 형태 바꾸지 않고 품
// 문자열로 변경해서 풀 때보다 시간 복잡도가 줄어듬
function solution(n) {
    var arr = [];

    do {
        arr.push(n%10);
        n = Math.floor(n/10);
    } while (n>0);

    return arr;
}