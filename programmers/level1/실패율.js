// 처음 코드
// 반복문을 한번만 쓰고 싶어서 안에다가 욱여넣다보니 코드도 더러워지고
// 런타임에러, 문제 틑리게 됨
// 그래서 이전에 작성했던 코드를 다시 보고 반복문을 그냥 한번 더 쓰기로 함
function solution(N, stages) {
    const userCnt = stages.length;
    const failureRate = [];
    const answer = [];
    let previousStage = 0, previousStageCnt = 0, previousTotal = 0;
    
    for(let i=0; i<N; i++) {
        failureRate.push([i+1, 0])
    }
    stages.sort();
    previousStage = stages[0];
    stages.forEach((stage, index) => {
        if(index === 0 || previousStage === stage) {
            previousStageCnt++;
        }
        if(stage > N || previousStage !== stage) {
            failureRate[previousStage - 1][1] = previousStageCnt / (userCnt - previousTotal);
            previousStage = stage;
            previousTotal += previousStageCnt;
            previousStageCnt = 1;
        }
    })
    if(stages[userCnt - 1] <= N) {
        failureRate[stages[userCnt - 1] - 1][1] = previousStageCnt / previousStageCnt
    }

    failureRate.sort((a, b) => {
        return b[1] - a[1]
    })
    
    failureRate.forEach(rate => {
        answer.push(rate[0])
    })
    
    return answer;
}

// 이전 코드에서는 stages를 정렬했었는데 정렬할 이유가 없어서 안함
// 반복문을 두번 쓰는게 나을 수 있다
// 단순하게 생각하자
function solution(N, stages) {
    const userCnt = stages.length;
    const numCnt = new Array(N).fill(0);
    const failureRate = [], answer = [];
    let previousTotal = 0;
    
    stages.forEach(stage => {
        if(stage <= N) {
            numCnt[stage - 1]++;
        }
    })
   
    numCnt.forEach((cnt, index) => {
        failureRate.push([index + 1, cnt / (userCnt - previousTotal)]);
        previousTotal += numCnt[index];
    })
   
    failureRate.sort((a, b) => {
        return b[1] - a[1]
    })
    
    failureRate.forEach(rate => {
        answer.push(rate[0])
    })
    
    return answer;
}