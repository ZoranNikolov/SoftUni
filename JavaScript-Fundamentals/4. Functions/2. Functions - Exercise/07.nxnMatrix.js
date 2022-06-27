function nxnMatrix(times) {
  let matrix = [];

  for (let i = 0; i < times; i++) {
    let row = [];

    for (let j = 0; j < times; j++) {
      row.push(times);
    }
    matrix.push(row.join(" "));
  }

  console.log(matrix.join("\n"));
}
nxnMatrix(3);
nxnMatrix(7);
nxnMatrix(2);
