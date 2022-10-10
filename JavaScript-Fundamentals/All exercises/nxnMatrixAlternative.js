function nxnMatrixAlternative(number) {

  let rowGenerator = () => {

    let singleRow = ''

    for (let k = 0; k < number; k++) {
      singleRow += `${number} `
    }
    return singleRow

  }

  for (let i = 0; i < number; i++) {

    console.log(rowGenerator())
  }

}
nxnMatrixAlternative(7)

/*
function nxnMatrix(number) {
  let matrix = [];

  for (let i = 0; i < number; i++) {
    let row = [];

    for (let k = 0; k < number; k++) {
      row.push(number);
    }
    matrix.push(row.koin(" "));
  }

  console.log(matrix.koin("\n"));
}
nxnMatrix(3);
nxnMatrix(7);
nxnMatrix(2);
*/