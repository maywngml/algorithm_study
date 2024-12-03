// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/72411?language=javascript
// 시간복잡도: O((m2^n)log(m2^n))

function solution(orders, course) {
  const courseCount = course.length;
  const sortedOrders = orders.map((order) => order.split('').sort().join(''));
  const courseOrder = new Map();
  const bestCourse = new Map();
  const answer = [];

  const findCourseOrder = (subOrder, lastIndex, courseIndex, order) => {
    if (courseIndex > courseCount) {
      return;
    }
    const isCorrect = subOrder.length === course[courseIndex] - 1;
    const orderLength = order.length;

    for (let i = lastIndex + 1; i < orderLength; i++) {
      const newSubOrder = subOrder + order[i];
      if (isCorrect) {
        findCourseOrder(newSubOrder, i, courseIndex + 1, order);
        courseOrder.set(newSubOrder, (courseOrder.get(newSubOrder) || 0) + 1);
      } else {
        findCourseOrder(newSubOrder, i, courseIndex, order);
      }
    }
  };

  sortedOrders.forEach((order) => {
    findCourseOrder('', -1, 0, order);
  });

  for (const [key, value] of courseOrder) {
    const length = key.length;
    const previousCourse = bestCourse.get(length);

    if (previousCourse) {
      const [menu, count] = previousCourse[0];

      if (value > count) {
        bestCourse.set(length, [[key, value]]);
      } else if (value === count) {
        previousCourse.push([key, value]);
      }
    } else if (value > 1) {
      bestCourse.set(length, [[key, value]]);
    }
  }

  for (const [key, value] of bestCourse) {
    answer.push(...value.map((item) => item[0]));
  }

  return answer.sort();
}
