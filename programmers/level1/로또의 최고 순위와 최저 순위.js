// 처음 풀이
/*
    1. 0 외에 중복되는 숫자는 없다는 규칙 때문에 set을 이용해서 0 개수 구함
    2. 당첨 번호 안에 내 로또 번호 있는지 확인하려고 indexOf 사용
    3. 순위 구하는 함수를 따로 구분해서 만듬
*/
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
/*
    1. 랭킹 구하기 위해 따로 함수 사용하지 않고 배열에다 순위를 넣어놓음
        (일치 개수를 인덱스로 삼음 => 0, 1개 일치하면 6등)
    2. filter를 사용해서 내 로또와 당첨 번호 일치하는 숫자 개수를 찾음
    3. 0 개수 또한 filter이용해서 구함
*/
function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1]
    const coincideCnt = lottos.filter(lotto => win_nums.includes(lotto)).length
    const zeroCnt = lottos.filter(lotto => lotto === 0).length
    let answer = [];
    
    answer.push(rank[coincideCnt + zeroCnt], rank[coincideCnt]);
    
    return answer;
}