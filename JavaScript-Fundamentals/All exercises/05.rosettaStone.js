function rosettaStone(array) {
  let matrix = array.slice();
  let templateLength = Number(matrix.shift());
  let templateMatrix = matrix
    .splice(0, templateLength)
    .map((row) => row.split(" ").map((x) => Number(x)));
  matrix = matrix.map((row) => row.split(" ").map((x) => Number(x)));

  for (let matrixRow = 0; matrixRow < matrix.length; matrixRow += templateLength) {
    for (let matrixCol = 0; matrixCol < matrix.length; matrixCol += templateMatrix[0].length) {
        
      for (let templateMatrixRow = 0; templateMatrixRow < templateLength; templateMatrixRow++) {
        for (let templateMatrixCol = 0;templateMatrixCol < templateMatrix[0].length;templateMatrixCol++) {
            
          let code = 0;
          if (matrixCol + templateMatrixCol > matrix.length - 1 || matrixRow + templateMatrixRow > matrix.length - 1) {
            continue;
          } else {
            code = matrix[matrixRow + templateMatrixRow][matrixCol + templateMatrixCol] + templateMatrix[templateMatrixRow][templateMatrixCol];
            let currentSymbol = getLetter(code);
            matrix[matrixRow + templateMatrixRow].splice(matrixCol + templateMatrixCol, 1,currentSymbol);
          }
        }
      }
    }
  }

  function getLetter(code) {
    let num = code;
    if (code >= 27) {
      num = code % 27;
    }
    let letter = " ";
    if (num > 0) {
      letter = String.fromCharCode(num + 64);
    }
      
    return letter;
  }

  let res = [];
  matrix
    .map((el) => {
      res.push(el.join(""));
    })
    .join("");

  console.log(res.join("").trim());
}
rosettaStone([
  "2",
  "59 36",
  "82 52",
  "4 18 25 19 8",
  "4 2 8 2 18",
  "23 14 22 0 22",
  "2 17 13 19 20",
  "0 9 0 22 22",
]);
rosettaStone([
  "2",
  "31 32",
  "74 37",
  "19 0 23 25",
  "22 3 12 17",
  "5 9 23 11",
  "12 18 10 22",
]);
rosettaStone([
  "1",
  "1 3 13",
  "12 22 14 13 25 0 4 24 23",
  "18 24 2 25 22 0 0 11 18",
  "8 25 6 26 8 23 13 4 14",
  "14 3 14 10 6 1 6 16 14",
  "11 12 2 10 24 2 13 24 0",
  "24 24 10 14 15 25 18 24 12",
  "4 24 0 8 4 22 19 22 14",
  "0 11 18 26 1 19 18 13 15",
  "8 15 14 26 24 14 26 24 14",
]);