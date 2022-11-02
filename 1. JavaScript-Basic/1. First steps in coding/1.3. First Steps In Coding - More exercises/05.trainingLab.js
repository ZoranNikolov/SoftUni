function trainingLab(input) {
  let wMetres = Number(input[0]);
  let hMetres = Number(input[1]);

  let wCm = wMetres * 100;
  let hCm = hMetres * 100;

  let benchW = 70;
  let benchH = 120;
  let corridorW = 100;

  let departmentWp = 2;
  let doorWp = 1;

  let rows = Math.floor((hCm - corridorW) / benchW);
  let columns = Math.floor(wCm / benchH);

  let workPlaces = rows * columns - departmentWp - doorWp;
  console.log(workPlaces);
}
trainingLab(["15", "8.9"]);
