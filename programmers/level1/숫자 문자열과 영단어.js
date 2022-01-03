// 처음 풀이
/*
    1. 변경해야 하는 숫자 영단어와 그에 대응되는 숫자를 객체로 미리 선언
    2. 주어진 s에 숫자 영단어가 있는지 확인하고 replace로 숫자로 변경하고자 함
    3. 그런데 replace는 제일 먼저 찾은 단어 하나만 바꿔주는 거라서 정규식 이용해서 
        전체 단어 다 바꾸도록 하려고 함
    4. 그러나 정규식 안에 변수를 넣을 수 있는 방법은 없음, 정규식으로 바꿀거면 영단어
        하나하나 다 매칭해줘야 되는데 이는 너무 번거로워서 다른 방법 탐색
*/
function solution(s) {
    const change = {"zero":0, "one":1, "two":2, "three":3, "four":4, "five":5,
                   "six":6, "seven":7, "eight":8, "nine":9};
    let answer = s;
    
    for(const key in change) {
        answer = answer.replace(`/${key}/g`, change[key]);
    }
    
    return Number(answer);
}

// 다른 사람 풀이
/* 
    1. split를 이용해서 숫자 영단어 기준으로 문자열 나눠서 배열 만듬
        "oneseven", "one" 기준으로 split => ["", "seven"]
    2. 생성된 배열을 영단어에 맞는 숫자로 join 함
        ["", "seven"].join(1) => ""1"seven" => 1seven
*/
function solution(s) {
    const nums = ["zero", "one", "two", "three", "four", "five",
                   "six", "seven", "eight", "nine"];
    let answer = s;
    
    nums.forEach((num, index) => {
        let arr = answer.split(num);
        answer = arr.join(index)
    })
    
    return Number(answer);
}