// 숫자의 제곱근이 정수이면 약수는 홀수개,
// 정수가 아니면 약수는 짝수개 
function solution(left, right) {
    let answer = 0;
    
    for(let i = left; i <= right; i++) {
        answer = Number.isInteger(Math.sqrt(i)) ? answer - i : answer + i;
    }
    
    return answer;
}