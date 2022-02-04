/* 
    단순하게 w를 가장 크게 만들고, h는 가장 작게 만든다.
    가장 큰 w는 배열에서 가장 큰 수로 이미 정해져 있고
    그럼 h를 가장 작게 만들면 됨
    (h가 w보다 크다면 명함 뒤집음)
*/
function solution(sizes) {
    let maxW = 0, maxH = 0;
    sizes.forEach(size => {
        const [w, h] = size;
        maxW = Math.max(maxW, Math.max(w, h));
        maxH = Math.max(maxH, Math.min(w, h));
    })
    return maxW * maxH;
}