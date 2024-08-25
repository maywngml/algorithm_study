function almostSorted(arr) {
  const n = arr.length;
  let l = -1,
    r = -1;

  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      l = i;
      break;
    }
  }

  if (l === -1) {
    console.log('yes');
    return;
  }

  for (let i = n - 1; i > 0; i--) {
    if (arr[i] < arr[i - 1]) {
      r = i;
      break;
    }
  }

  [arr[l], arr[r]] = [arr[r], arr[l]];
  if (arr.every((val, i) => i === 0 || arr[i - 1] <= arr[i])) {
    console.log('yes');
    console.log(`swap ${l + 1} ${r + 1}`);
    return;
  }

  [arr[l], arr[r]] = [arr[r], arr[l]];
  let reversedSubarray = arr.slice(l, r + 1).reverse();
  let newArray = [...arr.slice(0, l), ...reversedSubarray, ...arr.slice(r + 1)];
  if (newArray.every((val, i) => i === 0 || newArray[i - 1] <= newArray[i])) {
    console.log('yes');
    console.log(`reverse ${l + 1} ${r + 1}`);
    return;
  }

  console.log('no');
}
