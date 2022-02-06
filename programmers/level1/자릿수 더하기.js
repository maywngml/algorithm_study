// 내 코드
// 정석적으로 품
function solution(n)
{
    const divisor = 10;
    let answer = 0;
    while(n > 0) {
        answer += n % divisor;
        n = Math.floor(n / divisor);
    }
    return answer;
}

// 다른 사람 코드
// 숫자를 문자열로 변환하고 reduce 함수 써서 자릿수 더함
function solution(n){
    return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
}