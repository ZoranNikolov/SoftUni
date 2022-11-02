function passwordGenerator(input) {
  let n = Number(input[0]);
  let l = Number(input[1]);
  let res = "";

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      for (let k = 1; k <= l; k++) {
        for (let v = 1; v <= l; v++) {
          for (let w = 1; w <= n; w++) {
            let symbolA = Number(i);
            let symbolB = Number(j);
            let symbolC = String.fromCharCode(96 + k);
            let symbolD = String.fromCharCode(96 + v);
            let symbolE = Number(w);
            if (symbolE > symbolA && symbolE > symbolB) {
              res += `${symbolA}${symbolB}${symbolC}${symbolD}${symbolE} `;
            }
          }
        }
      }
    }
  }
  console.log(res);
}
passwordGenerator(["4", "2"]);