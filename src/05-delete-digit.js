function deleteDigit(n) {
  const array = n.toString().split('');
  const min = Math.min.apply('none', array);
  const res = [];
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (Number(array[i]) === min && count === 0) count++;
    else res.push(array[i]);
  }
  return Number(res.join(''));
}

module.exports = deleteDigit;
