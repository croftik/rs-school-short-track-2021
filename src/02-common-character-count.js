function getCommonCharacterCount(s1, s2) {
  let result = 0;
  let k = 0;
  for (let i = 0; i < s1.length; i++) {
    if (k === s2.length) k = i - 1;
    while (k < s2.length) {
      if (s1[i] === s2[k]) {
        result++;
        k++;
        break;
      } else k++;
    }
  }
  return result;
}

module.exports = getCommonCharacterCount;
