function getMatrixElementsSum(matrix) {
  let summa = 0;
  let count = 0;
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        for (let n = 1; n <= i; n++) {
          summa += matrix[i - n][j];
        }
        count++;
      }
    }
  }
  if (count === 0) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        summa += matrix[i][j];
      }
    }
  }
  return summa;
}

module.exports = getMatrixElementsSum;
