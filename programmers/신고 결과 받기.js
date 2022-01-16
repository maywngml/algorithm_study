// 처음 작성한 코드
// report 기록을 검사할 때 조건문이 잘못 돼서 틀리는거였음
function solution(id_list, report, k) {
    const reportInfo = {}, mailCount = {} 
    const answer = [];
    
    id_list.forEach(id => {
        mailCount[id] = 0;
    })
    
    report.forEach(info => {
        const [reportID, reportedID] = info.split(" ");
        // 이미 reportInfo에 키가 생성되어 있고 reportID가 reportedID를 처음 신고할 경우
        if(reportedID in reportInfo && reportInfo[reportedID].indexOf(reportID) === -1) {
            reportInfo[reportedID].push(reportID);
        }
        // 처음에는 else문을 작성함
        // else문의 의미는 reportInfo에 키가 생성되어 있지 않거나 reportID가 reportedID를 처음 신고하는게 아닐 경우
        // => 조건문이 잘못 설정되서 오류 발생하는것 같아서 아래와 같이 조건문 변경하니 정답이었음
        if(!reportInfo.hasOwnProperty(reportedID)) {
            reportInfo[reportedID] = [reportID]
        }
    })
    
    for(const key in reportInfo) {
        if(reportInfo[key].length >= k) {
            reportInfo[key].forEach(user => {
                mailCount[user]++;
            })
        }
    }
    
    for(const key in mailCount) {
        answer.push(mailCount[key])
    }
    
    return answer;
}

// 1번째로 수정한 코드
function solution(id_list, report, k) {
    const reportInfo = {}
    const answer = new Array(id_list.length).fill(0);
    
    report.forEach(info => {
        const [reportID, reportedID] = info.split(" ");
        // 조건문을 reportedID가 reportInfo에 있을 경우만 먼저 작성하고
        // 중복 신고 확인하는 조건문은 이 안에 넣음
        // 앞으로도 조건문은 이렇게 크게 나누자 괜히 deps 줄이겠다고
        // 한 줄에 썼다가 틀리지 말자..^^
        if(reportedID in reportInfo) {
            if(reportInfo[reportedID].indexOf(reportID) === -1) {
                reportInfo[reportedID].push(reportID);
            }
        }
        else {
            reportInfo[reportedID] = [reportID]
        }
    })
    // 코드 줄일려고 id_list에서 유저의 인덱스를 찾아와
    // answer 변수에 메일 받은 횟수를 넣도록 변경해봤는데
    // 시간 더 걸림, 그럴 수 밖에 없음..!!
    // 코드가 길어지더라도 더 명확하게 시간 복잡도가 주는 코드가 나음
    for(const key in reportInfo) {
        const userList = reportInfo[key]
        if(userList.length >= k) {
            userList.forEach(user => {
                answer[id_list.indexOf(user)]++;
            })
        }
    }
    
    return answer;
}

// 최종 코드
function solution(id_list, report, k) {
    const reportInfo = {}, mailCount = {} 
    const answer = [];
    
    id_list.forEach(id => {
        mailCount[id] = 0;
    })
    
    report.forEach(info => {
        const [reportID, reportedID] = info.split(" ");
        if(reportedID in reportInfo) {
            if(reportInfo[reportedID].indexOf(reportID) === -1) {
                reportInfo[reportedID].push(reportID);
            }
        }
        else {
            reportInfo[reportedID] = [reportID]
        }
    })
    
    for(const key in reportInfo) {
        const userList = reportInfo[key];
        if(userList.length >= k) {
            userList.forEach(user => {
                mailCount[user]++;
            })
        }
    }
    
    for(const key in mailCount) {
        answer.push(mailCount[key])
    }
    
    return answer;
}