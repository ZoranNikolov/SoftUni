function carNumber(input) {
  let startNum = Number(input[0]);
  let endNum = Number(input[1]);
  let res = "";

  for (let i = startNum; i <= endNum; i++) {
    for (let j = startNum; j <= endNum; j++) {
      for (let k = startNum; k <= endNum; k++) {
        for (let l = startNum; l <= endNum; l++) {
          let digitA = Number(i);
          let digitB = Number(j);
          let digitC = Number(k);
          let digitD = Number(l);
          if (digitA % 2 === 0) {
            if (digitD % 2 !== 0) {
              if (digitA > digitD) {
                if ((digitB + digitC) % 2 === 0) {
                  res += `${digitA}${digitB}${digitC}${digitD} `;
                }
              }
            }
          } else {
            if (digitD % 2 === 0) {
              if (digitA > digitD) {
                if ((digitB + digitC) % 2 === 0) {
                  res += `${digitA}${digitB}${digitC}${digitD} `;
                }
              }
            }
          }
        }
      }
    }
  }
  console.log(res);
}
carNumber(["5", "8"]);