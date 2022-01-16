// 처음에는 month[0]에 30을 넣었음
// => 1일을 무조건 뺄 수 있도록
// 하지만 이럴 경우 1월달이 매개변수로 들어올 때 오류 발생
// month[0]에는 31을 넣고 답 구할 때 1일 빼도록 함
function solution(a, b) {
    const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const day = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU", "FRI"]
    let dateDifference = 0;
    let answer = '';
    
    for(let i = 0; i < a - 1; i++) {
        dateDifference += month[i];
    }
    
    answer = day[(dateDifference + b - 1) % 7];
    
    return answer;
}