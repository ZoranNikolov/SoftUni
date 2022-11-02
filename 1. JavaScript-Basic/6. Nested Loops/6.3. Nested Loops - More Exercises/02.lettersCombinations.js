function lettersCombinations(input) {
  let startLetter = input[0];
  let endLetter = input[1];
  let specialLetter = input[2];
  let posA = "";
  let posB = "";
  let posC = "";
  let counter = 0;
  let res = "";

  for (let i = startLetter.charCodeAt(0); i <= endLetter.charCodeAt(0); i++) {
    for (let j = startLetter.charCodeAt(0); j <= endLetter.charCodeAt(0); j++) {
      for (
        let k = startLetter.charCodeAt(0);
        k <= endLetter.charCodeAt(0);
        k++
      ) {
        posA = String.fromCharCode(i);
        posB = String.fromCharCode(j);
        posC = String.fromCharCode(k);
        if (
          posA !== specialLetter &&
          posB !== specialLetter &&
          posC !== specialLetter
        ) {
          res += `${posA}${posB}${posC} `;
          counter++;
        }
      }
    }
  }
  console.log(`${res}${counter}`);
}
lettersCombinations(["a", "c", "z"]);