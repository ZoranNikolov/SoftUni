function multiplicationTable(input) {
  let num = Number(input[0]);

  for (i = 1; i <= 10; i++) {
    console.log(`${i} * ${num} = ${i * num}`);
  }
}
multiplicationTable(["5"]);
