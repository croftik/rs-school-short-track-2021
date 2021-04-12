function getSumOfDigits(n) {
  let result = n;
  while (result >= 10) {
    result = result.toString().split('').map((element) => Number(element)).reduce((accumulator, currentValue) => accumulator + currentValue);
  }
  return result;
}

module.exports = getSumOfDigits;
