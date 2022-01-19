function solution(price, money, count) {
    let totalPrice = 0;
    let answer = 0;
    
    for(let i = 1; i <= count; i++) {
        totalPrice += price * i;
    }
    
    if(totalPrice > money) {
        answer = totalPrice - money;
    }

    return answer;
}