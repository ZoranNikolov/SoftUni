function uniquePinCodes(input) {
  const maxA = Number(input[0]);
  const maxB = Number(input[1]);
  const maxC = Number(input[2]);
  let numA = 0;
  let numB = 0;
  let numC = 0;

  for (let i = 2; i <= maxA; i++) {
    for (let j = 2; j <= 7; j++) {
      for (let k = 2; k <= maxC; k++) {
        if (i % 2 == 0 && k % 2 == 0 && j <= maxB && numB % j == 0) {
          if (j == 2 || j == 3 || j == 5 || j == 7) {
              numA = Number(i);
              numB = Number(j);
              numC = Number(k);
              console.log(`${numA} ${numB} ${numC}`);
              numA = 0;
              numB = 0;
              numC = 0;
          }
        }
      }
    }
  }
}
uniquePinCodes(["8", "2", "8"]);
