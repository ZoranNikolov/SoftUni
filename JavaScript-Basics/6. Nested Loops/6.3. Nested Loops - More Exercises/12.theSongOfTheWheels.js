function theSongOfTheWheels(input) {
  let num = Number(input[0]);
  let digitA = 0;
  let digitB = 0;
  let digitC = 0;
  let digitD = 0;
  let res = "";
  let isFound = false;
  let pass = "";
  let counter = 0;

  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      for (let k = 1; k <= 9; k++) {
        for (let l = 1; l <= 9; l++) {
          digitA = i;
          digitB = j;
          digitC = k;
          digitD = l;
          if (
            digitA < digitB &&
            digitC > digitD &&
            digitA * digitB + digitC * digitD === num
          ) {
            res += `${digitA}${digitB}${digitC}${digitD} `;
            counter++;
            if (counter === 4) {
              isFound = true;
              pass = `${digitA}${digitB}${digitC}${digitD}`;
            }
          }
        }
      }
    }
  }
  if (isFound) {
    console.log(res);
    console.log(`Password: ${pass}`);
  } else {
    console.log(res);
    console.log("No!");
  }
}
theSongOfTheWheels(["55"]);