function solution(n) {
    const sqrt = Math.sqrt(n);
    const answer = Number.isInteger(sqrt) ? (sqrt+1) * (sqrt+1) : -1;
    return answer;
}