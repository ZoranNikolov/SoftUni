function moving(input) {
  let index = 0;
  const houseW = Number(input[index++]);
  const houseL = Number(input[index++]);
  const houseH = Number(input[index++]);
  let houseVolume = houseW * houseL * houseH;
  let command = input[index++];
  let boxes = 0;

  while (houseVolume >= 0) {
    if (command === "Done") {
      console.log(`${houseVolume} Cubic meters left.`);
      break;
    }
    boxes = Number(command);
    houseVolume -= boxes;
    command = input[index++];
  }
  if (houseVolume < 0) {
    console.log(
      `No more free space! You need ${Math.abs(houseVolume)} Cubic meters more.`
    );
  }
}
moving(["10", "10", "2", "20", "20", "20", "20", "122"]);
moving(["10", "1", "2", "4", "6", "Done"]);
