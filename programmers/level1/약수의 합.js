// 제곱근으로 나눠질 경우에는 i를 두 번 더하게 됨
function solution(n) {
    let answer = 0;
    for(let i = 1; i <= Math.sqrt(n); i++) {
        if(n % i === 0) {
            answer += i + (n / i);
        }
    }
    return answer;
}

// 제곱은으로 나눠질 때는 i를 한 번만 더하게 함
function solution(n) {
    let answer = 0;
    for(let i = 1; i <= Math.sqrt(n); i++) {
        if(n % i === 0) {
            answer += i === Math.sqrt(n) ? i : i + (n / i);
        }
    }
    return answer;
}