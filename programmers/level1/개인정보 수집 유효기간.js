// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/150370

function solution(today, terms, privacies) {
  const mappedTerms = new Map();
  const [todayYear, todayMonth, todayDate] = today.split('.');
  const answer = [];

  terms.forEach((term) => {
    const [type, period] = term.split(' ');
    mappedTerms.set(type, +period);
  });

  privacies.forEach((privacy, index) => {
    const [submitDate, type] = privacy.split(' ');
    const [year, month, date] = submitDate.split('.');
    const period = mappedTerms.get(type);
    const periodYear = Math.floor(period / 12);
    const periodMonth = period % 12;
    let expirationYear = +year + periodYear;
    let expirationMonth = +month + periodMonth;

    if (expirationMonth > 12) {
      expirationYear++;
      expirationMonth -= 12;
    }

    if (expirationYear < +todayYear) {
      answer.push(index + 1);
    } else if (expirationYear === +todayYear) {
      if (expirationMonth < +todayMonth) {
        answer.push(index + 1);
      } else if (expirationMonth === +todayMonth && +date <= todayDate) {
        answer.push(index + 1);
      }
    }
  });

  return answer;
}
