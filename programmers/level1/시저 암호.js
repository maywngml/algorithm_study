// 조건문이 틀렸음
// 대문자에서 소문자로 변환되는 경우가 있을 수 있음
function solution(s, n) {
    const answer = s.split("").map(x => {
        const code = x.charCodeAt(0)
        const changedCode = code + n;
        const result = code === 32 
                    ? code : (changedCode >= 97 && changedCode <= 122) || (changedCode >= 65 && changedCode <= 90)      
                    ? changedCode : changedCode - 26;
        return String.fromCharCode(result);
    }).join("")
    return answer;
}

// 대문자, 소문자 구분해서 조건 처리함
function solution(s, n) {
    const answer = s.split("").map(x => {
        const code = x.charCodeAt(0)
        const changedCode = code + n;
        const result = code === 32 
                    ? code : (/[a-z]/.test(x) && changedCode > 122) || (/[A-Z]/.test(x) && changedCode > 90)      
                    ? changedCode - 26 : changedCode;
        return String.fromCharCode(result);
    }).join("")
    return answer;
}