// 내 코드
// 소수 여부를 판별해서 계산하면 시간복잡도가 줄어들 거라 생각했는데 아니었음..
// 코드만 복잡해짐..하지만 새로운 시도였으니 나쁘지 않다 생각
function isPrime(n) {
    for(let i = 2; i < Math.sqrt(n); i++) {
        if((i % 2) === 0) {
            return false;
        }
    }
    return true;
}

function getAnswer(n) {
    for(let i = 1; i < n; i++) {
        if((n % i) === 1) {
            return i;
        }
    }
}

function solution(n) {
    const answer = isPrime(n) ? n - 1 : getAnswer(n);
    
    return answer;
}

// 시간 복잡도 더 적은 방법
// 기냥 내가 처음 생각했던 대로 반복문 돌려벌여
function solution(n) {
    for(let i = 1; i < n; i++) {
        if((n % i) === 1) {
            return i;
        }
    }
}