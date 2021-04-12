function minesweeper(matrix) {
  const tempArray = [];
  const result = [];
  let temp1 = 0;
  let temp2 = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let count = 0;
      for (let row = -1; row <= 1; row++) {
        for (let column = -1; column <= 1; column++) {
          temp1 = row + i;
          temp2 = column + j;
          if (temp1 !== i || temp2 !== j) {
            if (temp1 >= 0 && temp1 < matrix.length
            && temp2 >= 0 && temp2 < matrix.length) count += matrix[temp1][temp2] ? 1 : 0;
          }
        }
      }
      tempArray.push(count);
    }
  }
  for (let i = 0; i < tempArray.length; i += 3) result.push(tempArray.slice(i, i + 3));
  return result;
}

module.exports = minesweeper;
