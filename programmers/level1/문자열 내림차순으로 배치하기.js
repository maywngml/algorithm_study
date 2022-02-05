// localeCompare 이용해서 정렬했더니
// Zgfedcb과 결과로 나옴
// 그래서 대문자 / 소문자 나눠서 정렬한 후에
// 소문자 + 대문자 해줌
function solution(s) {
    const s_arr = s.split("");
    const s_arr_uppercase = s_arr.filter(s => s === s.toUpperCase());
    const s_arr_lowercase = s_arr.filter(s => s === s.toLowerCase());
    let answer = "";

    s_arr_uppercase.sort((x, y) => {
        return y.localeCompare(x);
    });
    s_arr_lowercase.sort((x, y) => {
        return y.localeCompare(x);
    });
    answer = s_arr_lowercase.join("") + s_arr_uppercase.join("");

    return answer;
}

// 다른 사람 코드
// sort, reverse 하면 대문자 따로 처리 안해줘도 알맞은 결과 값 나옴.
function solution(s) {
    const answer = s.split("").sort().reverse().join("");
    return answer;
}