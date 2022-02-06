// 문자로 풀었을 때
function solution(n) {
    const answer = parseInt((n + "").split("").sort((x, y) => {return y - x}).join(""));
    return answer;
}

// 숫자로 풀었을 때
function solution(n) {
    const arr = [], divisor = 10;
    let answer = "";
    while(n > 0) {
        arr.push(n % divisor);
        n = Math.floor(n / divisor);
    }
    answer = parseInt(arr.sort((x, y) => {return y - x}).join(""));
    return answer;
}