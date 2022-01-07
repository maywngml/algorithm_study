// 처음엔 규칙을 찾아서 풀어보려고 했는데 못 찾음
// 그냥 반복문 써서 하나하나 총합 구해서 소수여부 판단하는게 베스트였음

function isPrime(num) {
    const num_sqrt = Math.sqrt(num);
    for(let i=2; i<=num_sqrt; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}

function solution(nums) {
    const length = nums.length;
    let answer = 0;
    
    for(let i=0; i<length-2; i++) {
        for(let j=i+1; j<length-1; j++) {
            for(let k=j+1; k<length; k++) {
                const total = nums[i] + nums[j] + nums[k];
                if(isPrime(total)) {
                    answer++;
                }
            }
        }
    }
    
    return answer;
}