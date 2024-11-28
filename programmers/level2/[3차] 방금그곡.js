// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/17683#

function convert(m) {
  return m
    .replaceAll('C#', 'c')
    .replaceAll('D#', 'd')
    .replaceAll('F#', 'f')
    .replaceAll('G#', 'g')
    .replaceAll('A#', 'a')
    .replaceAll('B#', 'b');
}

function getPlayingTime(startTime, endTime) {
  const [startHour, startMinute] = startTime.split(':');
  const startPlayingTIme = +startHour * 3600 + +startMinute * 60;
  const [endHour, endMinute] = endTime.split(':');
  const endPlayingTIme = +endHour * 3600 + +endMinute * 60;

  return Math.floor((endPlayingTIme - startPlayingTIme) / 60);
}

function solution(m, musicinfos) {
  const mLength = m.length;
  const neoMelody = convert(m);
  let answerPlayingTime = 0;
  let answer = '(None)';

  musicinfos.forEach((musicinfo) => {
    const [startTime, endTime, title, music] = musicinfo.split(',');
    const playingTime = getPlayingTime(startTime, endTime);
    const convertedM = convert(music);
    const convertedMLength = convertedM.length;
    const totalM =
      convertedM.repeat(Math.floor(playingTime / convertedMLength)) +
      convertedM.substr(0, playingTime % convertedMLength);

    if (totalM.includes(neoMelody)) {
      if (playingTime > answerPlayingTime) {
        answer = title;
        answerPlayingTime = playingTime;
      }
    }
  });

  return answer;
}
