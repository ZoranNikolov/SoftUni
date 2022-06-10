function weddingSeats(input) {
  let startSector = "A";
  let sectorMax = input[0];
  let rows = Number(input[1]);
  let seatsOnOddRows = Number(input[2]);
  let seatsOnEvenRows = seatsOnOddRows + 2;
  let res = "";
  let counter = 0;
  let curSector = 0;
  let curRow = 0;
  let curSeat = 0;

  let convertedSector = sectorMax.charCodeAt(0);
  let startSectorConverted = startSector.charCodeAt(0);

  for (let i = startSectorConverted; i <= convertedSector; i++) {
    for (let j = 1; j <= rows; j++) {
      if (j % 2 == 0) {
        for (let k = 1; k <= seatsOnEvenRows; k++) {
          let curSector = i;
          let curRow = j;
          let curSeat = k;
          res = `${String.fromCharCode(
            curSector
          )}${curRow}${String.fromCharCode(curSeat + 96)}`;
          console.log(res);
          counter++;
        }
      } else {
        for (let l = 1; l <= seatsOnOddRows; l++) {
          let curSector = i;
          let curRow = j;
          let curSeat = l;
          res = `${String.fromCharCode(
            curSector
          )}${curRow}${String.fromCharCode(curSeat + 96)}`;
          console.log(res);
          counter++;
        }
      }
    }
    rows++;
  }
  console.log(counter);
}
weddingSeats(["C", "4", "2"]);
