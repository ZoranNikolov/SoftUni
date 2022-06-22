function spiralMatrix(row, col) {
  let rows = row;
  let cols = col;
  let matrix = [];

  for (let row = 0; row < rows; row++) {
    matrix[row] = [];
    for (let col = 0; col < cols; col++) {
      matrix[row][col] = 0;
    }
  }

  let top = 0;
  let bottom = rows - 1;
  let left = 0;
  let right = cols - 1;

  let index = 1;
  let direction = 0;

  while (top <= bottom && left <= right) {
    switch (direction % 4) {
      case 0:
        for (let col = left; col <= right; col++) {
          matrix[top][col] = index++;
        }
        top++;
        direction++;
        break;
      case 1:
        for (let row = top; row <= bottom; row++) {
          matrix[row][right] = index++;
        }
        right--;
        direction++;
        break;
      case 2:
        for (let col = right; col >= left; col--) {
          matrix[bottom][col] = index++;
        }
        bottom--;
        direction++;
        break;
      default:
        for (let row = bottom; row >= top; row--) {
          matrix[row][left] = index++;
        }
        left++;
        direction++;
        break;
    }
  }

  console.log(matrix.map((r) => r.join(" ")).join("\n"));
}
spiralMatrix(5, 5);
