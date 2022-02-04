/*
    단순히 a부터 b까지 더해주면 되는 문제
 */
function solution(a, b) {
    const start = Math.min(a, b);
    const end = Math.max(a, b);
    let answer = 0;
    for(let i = start; i <= end; i++) {
        answer += i;
    }
    return answer;
}