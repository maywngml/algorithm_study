function superReducedString(s) {
  let word = s;

  if (word.length === 1) return word;

  while (word.length > 0) {
    const wordLength = word.length;
    let isReplace = false;
    for (let i = 0; i < wordLength - 1; i++) {
      if (word[i] === word[i + 1]) {
        word = word.replace(`${word[i]}${word[i]}`, '');
        isReplace = true;
        break;
      }
    }
    if (!isReplace) break;
  }

  return word ? word : 'Empty String';
}
