// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42583?language=javascript
// 큐 개념을 이용, 다리에 트럭을 더 올릴 수 없을 때는 0을 넣는다!!
function solution(bridge_length, weight, truck_weights) {
  const bridge = new Array(bridge_length).fill(0);
  const truckLength = truck_weights.length;
  let index = 0,
    bridgeWeight = 0;
  let answer = 0;

  while (bridgeWeight > 0 || index < truckLength) {
    const leavedTruckWeight = bridge.pop();
    bridgeWeight -= leavedTruckWeight;

    if (bridgeWeight + truck_weights[index] <= weight) {
      bridge.unshift(truck_weights[index]);
      bridgeWeight += truck_weights[index];
      index++;
    } else {
      bridge.unshift(0);
    }

    answer++;
  }

  return answer;
}
