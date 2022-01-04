function solution(numbers) {
    const answer = 45 - numbers.reduce((previous, current) => previous + current);
    return answer;
}