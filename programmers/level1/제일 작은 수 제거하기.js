function solution(arr) {
    if(arr.length === 1) {
        arr = [-1];
    }
    else {
        arr.splice(arr.indexOf(Math.min(...arr)), 1);
    }
    return arr;
}