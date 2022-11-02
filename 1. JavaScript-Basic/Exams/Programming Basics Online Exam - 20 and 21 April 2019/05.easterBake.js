function easterBake(input) {
  let index = 0;
  let countBakes = Number(input[index++]);
  let packSugar = 950;
  let packWheat = 750;
  let sugarUsed = 0;
  let wheatUsed = 0;
  let maxSugar = 0;
  let maxWheat = 0;

  for (let i = 0; i < countBakes; i++) {
    let command = Number(input[index++]);
    sugarUsed += command;
    if (maxSugar < command) {
      maxSugar = command;
    }

    command = Number(input[index++]);
    wheatUsed += command;
    if (maxWheat < command) {
      maxWheat = command;
    }
    
  }
  let packsSugarUsed = Math.ceil(sugarUsed / packSugar);
  let packsWheatUsed = Math.ceil(wheatUsed / packWheat);
  console.log(`Sugar: ${packsSugarUsed}`);
  console.log(`Flour: ${packsWheatUsed}`);
  console.log(
    `Max used flour is ${maxWheat} grams, max used sugar is ${maxSugar} grams.`
  );
}
easterBake(["3", "400", "350", "250", "300", "450", "380"]);
