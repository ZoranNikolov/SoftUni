function rosettaStone(array) {
  let matrix = array.slice();
  let templateLength = Number(matrix.shift());

  let tempMatrix = matrix
    .splice(0, templateLength)
    .map((row) => row.split(" ").map((x) => Number(x)));

  matrix = matrix.map((row) => row.split(" ").map((x) => Number(x)));
  let result = "";
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      // current index position
      let code = matrix[row][col];
      // template overlay
      let templateDecoder =
        tempMatrix[row % templateLength][col % tempMatrix[0].length];
      let currentSymbol = code + templateDecoder;
      result += getLetter(currentSymbol);
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

  console.log(result);
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
