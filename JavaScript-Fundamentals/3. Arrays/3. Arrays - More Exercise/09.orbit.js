function orbit(array) {
  let cols = array[0];
  let rows = array[1];
  let x = array[2];
  let y = array[3];
  let matrix = [];

  for (let row = 0; row < rows; row++) {
    matrix[row] = [];
    for (let col = 0; col < cols; col++) {
      matrix[row][col] = 0;
    }
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      let currentPositionX = row;
      let currentPositionY = col;

      let distinctionX = Math.abs(row - x);
      let distinctionY = Math.abs(col - y);
      console.log(distinctionX, distinctionY);
      if (currentPositionX === x && currentPositionY === y) {
        matrix[row][col] = 1;
      } else {
        matrix[row][col] = matrix[row].length - 1 - x;
      }
    }
  }

  console.table(matrix);
}
orbit([4, 4, 0, 0]);
// orbit([5, 5, 2, 2])
// orbit([3, 3, 2, 2])
