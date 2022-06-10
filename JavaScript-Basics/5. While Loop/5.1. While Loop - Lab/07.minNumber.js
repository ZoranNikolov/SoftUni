function minNumber(input) {
  let index = 0;
  let minNumber = Number.MAX_SAFE_INTEGER;
  let command = input[index++];

  while (command !== "Stop") {
    let num = Number(command);
    if (minNumber > num) {
      minNumber = num;
    }
    command = input[index++];
  }
  console.log(minNumber);
}
minNumber(["-1", "-2", "Stop"]);
