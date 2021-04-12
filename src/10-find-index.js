function findIndex(array, value) {
  let firstElement = 0;
  let lastElement = array.length - 1;
  let position = -1;
  let found = false;
  let middle = 0;
  while (found === false && firstElement <= lastElement) {
    middle = Math.floor((firstElement + lastElement) / 2);
    if (array[middle] === value) {
      found = true;
      position = middle;
    } else if (array[middle] > value) lastElement = middle - 1;
    else firstElement = middle + 1;
  }
  return position;
}

module.exports = findIndex;
