function pollution(array, forces) {
  let matrix = array.map((row) => row.split(" ").map((x) => Number(x)));
  let threshold = 50;
  let isPolluted = false;
  let pollutedAreas = [];

  for (let i = 0; i < forces.length; i++) {
    let forcesIndex = forces[i].split(" ");
    let force = forcesIndex[0];
    let forceIndex = Number(forcesIndex[1]);

    switch (force) {
      case "breeze":
        let rowBreeze = forceIndex;
        for (let row = 0; row < matrix.length; row++) {
          for (let col = 0; col < matrix.length; col++) {
            if (row === rowBreeze) {
              matrix[row][col] = Math.max(0, matrix[row][col] - 15);
            }
          }
        }
        break;
      case "gale":
        let colGale = forceIndex;
        for (let row = 0; row < matrix.length; row++) {
          for (let col = 0; col < matrix.length; col++) {
            if (col === colGale) {
              matrix[row][col] = Math.max(0, matrix[row][col] - 20);
            }
          }
        }
        break;
      case "smog":
        let smogValue = forceIndex;
        for (let row = 0; row < matrix.length; row++) {
          for (let col = 0; col < matrix.length; col++) {
            matrix[row][col] += smogValue;
          }
        }
        break;
    }
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix.length; col++) {
      if (matrix[row][col] >= threshold) {
        isPolluted = true;
        let coordinatesToPush = "";
        coordinatesToPush += "[" + (String(row) + "-" + String(col)) + "]";
        pollutedAreas.push(coordinatesToPush);
      }
    }
  }

  console.log(
    isPolluted
      ? `Polluted areas: ${pollutedAreas.join(", ")}`
      : "No polluted areas"
  );
}
pollution(
  [
    "5 7 72 14 4",
    "41 35 37 27 33",
    "23 16 27 42 12",
    "2 20 28 39 14",
    "16 34 31 10 24",
  ],
  ["breeze 1", "gale 2", "smog 25"]
);
pollution(
  [
    "5 7 3 28 32",
    "41 12 49 30 33",
    "3 16 20 42 12",
    "2 20 10 39 14",
    "7 34 4 27 24",
  ],
  ["smog 11", "gale 3", "breeze 1", "smog 2"]
);
pollution(
  ["5 7 2 14 4", "21 14 2 5 3", "3 16 7 42 12", "2 20 8 39 14", "7 34 1 10 24"],
  ["breeze 1", "gale 2", "smog 35"]
);
