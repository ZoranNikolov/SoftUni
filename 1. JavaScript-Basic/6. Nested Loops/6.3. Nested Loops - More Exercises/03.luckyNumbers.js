function luckyNumbers(input) {
  let num = Number(input[0]);
  let digitA = 0;
  let digitB = 0;
  let digitC = 0;
  let digitD = 0;
  let res = "";

  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      for (let k = 1; k <= 9; k++) {
        for (let l = 1; l <= 9; l++) {
          digitA = Number(i);
          digitB = Number(j);
          digitC = Number(k);
          digitD = Number(l);
          let sumA = digitA + digitB;
          let sumB = digitC + digitD;
          if (sumA === sumB)
            if (num % sumA === 0) {
              res += `${digitA}${digitB}${digitC}${digitD} `;
            }
        }
      }
    }
}
console.log(res);
}
luckyNumbers(["3"]);
