/*
    아주 정직하게 반복문으로 p, y 하나씩 찾아서 개수 증가시킴
 */
function solution(s){
    const length = s.length;
    let yCnt = 0, pCnt = 0;
    let answer = true;
    s = s.toLowerCase();
    
    for(let i = 0; i < length; i++) {
        if(s[i] === 'p') {
            pCnt++;
        }
        else if(s[i] === 'y') {
            yCnt++;
        }
    }
    
    answer = pCnt === yCnt ? true : false;

    return answer;
}

/*
    다른 사람들 코드
    split, match로도 문자열에서 특정 문자 개수를 셀 수 있다는 것을 알게 됨
 */

function numPY(s){
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}

function numPY(s) {
    return s.match(/p/ig).length == s.match(/y/ig).length;
}