function solution(s) {
    const answer = (s.length === 4 || s.length === 6)
                    && !/[^0-9]/g.test(s);
    return answer;
}