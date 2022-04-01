function solution(arr) {
    const answer = arr.reduce((total, current) => total += current) / arr.length;
    return answer;
}