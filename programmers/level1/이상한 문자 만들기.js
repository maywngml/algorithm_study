function changeWord(s) {
    return s.split("").map((x, index) => {
        return index % 2 === 0 ? x.toUpperCase() : x.toLowerCase();
    }).join("")
}

function solution(s) {
    const answer = s.split(" ").map(x => {
        return changeWord(x);
    }).join(" ");
    return answer;
}