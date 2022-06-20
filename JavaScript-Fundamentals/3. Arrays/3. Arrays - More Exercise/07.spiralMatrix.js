function spiralMatrix(num1, num2) {
  let table = new Array(num1);
  for (let i = 0; i < table.length; i++) table[i] = new Array(num2).fill(0);

  console.table(table);
}
// spiralMatrix(5, 5)
spiralMatrix(3, 3);
