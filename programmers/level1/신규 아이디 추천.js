// 전체 문자열을 검색해야 하면 g를 꼭 넣어줘야 됨
function solution(new_id) {
    let answer = new_id
        .toLowerCase() // 모든 대문자 소문자로 치환
        .replace(/[^\w-_.]/g, '') // 2번 조건(대괄호 안에 ^를 넣어야 이외로 인식됨) .,_,-는 문자이기 때문에 앞에 '\'를 붙여줘야 함!! \w는 영문자와 숫자 그리고 밑줄 문자를 뜻함, \W는 반대를 뜻함
        .replace(/\.{2,}/g, '.') // .가 2번 이상 반복되면 .로 치환
        .replace(/^\.|\.$/g, '') // .이 맨 앞에 있거나 맨 뒤에 있으면 제거
        .replace(/^$/, 'a') // 공백 문자면 a로 바꿈
        .substr(0, 15) // 앞에서부터 15개 자름
        .replace(/\.$/, ''); // .이 뒤에 있으면 제거
    let length = answer.length;
    if(length <= 2) {
        answer += answer.charAt(length - 1).repeat(3 - length);
        // answer 길이가 2보다 작으면 answer 마지막 문자를 answer 길이가 3이 될 때까지 반복
    }
    return answer;
}