function bunnyKill(bunnies) {
  let array = bunnies.slice();
  let coordinates = array
    .pop()
    .split(" ")
    .map((x) => x.split(",").map(Number));

  let damage = 0;
  let killCount = 0;

  for (let i = 0; i < array.length; i++) {
    let indexToReplace = i;
    array.splice(indexToReplace, 1, array[i].split(" "));
    array[i] = array[i].map(Number);
  }

  for (let l = 0; l < coordinates.length; l++) {
    let rowIndex = coordinates[l][0];
    let colIndex = coordinates[l][1];

    for (let row = 0; row < array.length; row++) {
      for (let col = 0; col < array[row].length; col++) {
        if (rowIndex === row && colIndex === col) {
          let startIndexRow = Math.max(0, row - 1);
          let endIndexRow = Math.min(array.length, row + 1);
          let startIndexCol = Math.max(0, col - 1);
          let endIndexCol = Math.min(array[row].length, col + 1);
          let currentBunnyValue = array[row][col];
          damage += array[row][col];

          for (
            let startRow = startIndexRow;
            startRow <= endIndexRow;
            startRow++
          ) {
            for (
              let startCol = startIndexCol;
              startCol <= endIndexCol;
              startCol++
            ) {
              if (currentBunnyValue >= array[startRow][startCol]) {
                array[startRow][startCol] = 0;
              } else {
                array[startRow][startCol] -= currentBunnyValue;
              }
            }
          }
        }
      }
    }
  }
  console.log(array[0]);
  console.log(array[1]);
  console.log(array[2]);
  console.log(array[3]);
}
bunnyKill([
  "5 10 15 20",
  "10 10 10 10",
  "10 15 10 10",
  "10 10 10 10",
  "2,2 0,1",
]);
// bunnyKill(["10 10 10", "10 10 10", "10 10 10", "0,0"]);
