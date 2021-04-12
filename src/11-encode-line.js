function encodeLine(str) {
  let count = 0;
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) count++;
    else if (count === 0) result += str[i];
    else {
      count++;
      result += count + str[i];
      count = 0;
    }
  }
  return result;
}

module.exports = encodeLine;
