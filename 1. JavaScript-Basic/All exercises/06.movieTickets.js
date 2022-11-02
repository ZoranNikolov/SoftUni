function movieTickets(input) {
  let index = 0;
  let a1 = Number(input[index++]);
  let a2 = Number(input[index++]);
  let n = Number(input[index++]);

  for (let i = a1; i <= a2 - 1; i++) {
    for (let j = 1; j <= n - 1; j++) {
      for (let k = 1; k <= n / 2 - 1; k++) {
        let symbolA = String.fromCharCode(i);
        let symbolB = j;
        let symbolC = k;
        let symbolD = i;
        if (i % 2 !== 0 && (j + k + i) % 2 !== 0) {
          console.log(`${symbolA}-${symbolB}${symbolC}${symbolD}`);
        }
      }
    }
  }
}
movieTickets(["71", "74", "6"]);