// 자바스크립트에서 sort를 쓸 때는 안에 비교함수를 무조건 작성해주자
// const array1 = [1, 30, 4, 21, 100000];
// array1.sort();
// => [1, 100000, 21, 30, 4]
// 결과가 위와 같이 나옴 첫번재 숫자를 가지고 대소를 비교하기 때문에 그럼

function solution(array, commands) {
    let answer = [];
    
    commands.forEach(command => {
        const [start, end, k] = command;
        const slicedArray = array.slice(start - 1, end);
        answer.push(slicedArray.sort((a, b) => { return a - b })[k - 1])
    })
    
    return answer;
}