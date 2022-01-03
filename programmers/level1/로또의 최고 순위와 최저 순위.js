// 처음 풀이
function getRanking(coincideNum) {
    const tempRanking = 7 - coincideNum;
    let resultRanking;
    if(tempRanking > 6) {
        resultRanking = 6;
    }
    else {
        resultRanking = tempRanking;
    }
    return resultRanking;
}

function solution(lottos, win_nums) {
    const lottosSet = [...new Set(lottos)];
    const lottosDifference = lottos.length - lottosSet.length;
    const zeroCnt = lottosSet.indexOf(0) !== -1 ? lottosDifference + 1 : 0;
    let answer = [];
    let coincideNum = 0;

    win_nums.forEach(win_num => {
        if(lottos.indexOf(win_num) !== -1) {
            coincideNum++;
        }
    });

    answer.push(getRanking(coincideNum + zeroCnt), getRanking(coincideNum))

    return answer;
}

// 다른사람 코드 참고한 후에 수정한 풀이
function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1]
    const coincideCnt = lottos.filter(lotto => win_nums.includes(lotto)).length
    const zeroCnt = lottos.filter(lotto => lotto === 0).length
    let answer = [];
    
    answer.push(rank[coincideCnt + zeroCnt], rank[coincideCnt]);
    
    return answer;
}