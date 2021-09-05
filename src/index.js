module.exports = function solveSudoku(matrix) {
  const size = 9;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (matrix[i][j] == 0) {       
        for (let n = 1; n < 10; n++) {
          if (validate(matrix, i, j, n)) {
            matrix[i][j] = n;
            if (solveSudoku(matrix)) {
              return matrix;
            } else {
              matrix[i][j] = 0;
            }
          }
        }
        return false;
      }
    }
  }
  return matrix;
}

function section(i, j, a) {
  return {
    row: Math.floor(i / 3) * 3 + Math.floor(a / 3),
    column: Math.floor(j / 3) * 3 + a % 3
  };
}

function validate(matrix, i, j, n) {
  for (let a = 0; a < 9; a++) {  
    var position = section(i, j, a);  
    if (matrix[i][a] == n || matrix[a][j] == n || matrix[position.row][position.column] == n) {
      return false;
    }
  }
  return true;
}