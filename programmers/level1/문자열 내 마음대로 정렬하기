/* 
    처음에 작성한 코드
    두 문자열 비교해서 숫자를 리턴하는 compare 함수를 만들었음
    이걸로 정렬함
*/
function compare(first, second) {
    if(first <= second) {
        return -1;
    }
    else {
        return 0;
    }
}

function solution(strings, n) {
    let answer = [];
    strings.sort((first, second) => {
        if(first[n] === second[n]) {
            return compare(first, second);
        }
        return compare(first[n], second[n]);
    })
    answer = strings;
    return answer;
}

/* 
    다른 사람 코드
    localeCompare을 처음 배움
    localeCompare은 문자열 정렬 결과를 숫자로 반환함
*/
function solution(strings, n) {
    // strings 배열
    // n 번째 문자열 비교
    return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
}