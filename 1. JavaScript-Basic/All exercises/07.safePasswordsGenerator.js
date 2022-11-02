function safePasswordsGenerator(input) {
  let a = Number(input[0]);
  let b = Number(input[1]);
  let maxAmountOfPass = Number(input[2]);
  let counter = 0;
  let isFinished = false;
  let res = "";
  let A = 35;
  let B = 64;
  let x = 1;
  let y = 1;

  while (x <= a) {
    while (y <= b) {
      let symbolA = String.fromCharCode(A);
      let symbolB = String.fromCharCode(B);
      let symbolC = x;
      let symbolD = y;
      let symbolE = String.fromCharCode(B);
      let symbolF = String.fromCharCode(A);
      res += `${symbolA}${symbolB}${symbolC}${symbolD}${symbolE}${symbolF}|`;
      counter++;
      if (counter >= maxAmountOfPass) {
        isFinished = true;
        break;
      }
      A++;
      if (A > 55) {
        A = 35;
      }
      B++;
      if (B > 96) {
        B = 64;
      }
      y++;
    }
    x++;
    y = 1;
    if (isFinished) {
      break;
    }
  }
  console.log(res);
}
safePasswordsGenerator(["20", "50", "10"]);
safePasswordsGenerator(["2", "3", "10"]);
