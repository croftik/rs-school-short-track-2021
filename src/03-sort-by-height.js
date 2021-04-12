function sortByHeight(arr) {
  const result = [];
  const original = arr.slice();
  arr.sort((a, b) => a - b);
  while (arr.includes(-1)) {
    arr.shift();
  }
  let j = 0;
  for (let i = 0; i < original.length; i++) {
    if (original[i] === -1) result.push(-1);
    else {
      result.push(arr[j]);
      j++;
    }
  }
  return result;
}

module.exports = sortByHeight;
