function secretDoorLock(input) {
  let firstDigit = Number(input[0]);
  let secondDigit = Number(input[1]);
  let thirdDigit = Number(input[2]);
  let res = "";

  for (let i = 1; i <= firstDigit; i++) {
    for (let j = 1; j <= secondDigit; j++) {
      for (let k = 1; k <= thirdDigit; k++) {
        if (i % 2 === 0 && k % 2 === 0) {
          if (j == 2 || j == 3 || j == 5 || j == 7) {
            res = `${i} ${j} ${k}`
            console.log(res);
          }
        }
      }
    }
  }
}
secretDoorLock(["8", "2", "8"]);
