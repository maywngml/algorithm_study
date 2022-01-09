function solution(a, b) {
    const answer = a.reduce((accumlator, currentNum, currentIndex) => accumlator += currentNum * b[currentIndex], 0);
    return answer;
}