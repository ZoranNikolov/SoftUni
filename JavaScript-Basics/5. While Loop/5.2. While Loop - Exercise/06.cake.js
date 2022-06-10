function cake(input) {
  let index = 0;

  let cakeW = Number(input[index++]);
  let cakeH = Number(input[index++]);
  let cakePieces = cakeW * cakeH;
  let command = input[index++];

  while (cakePieces >= 0) {
    if (command === "STOP") {
      console.log(`${cakePieces} pieces are left.`);
      break;
    }
    cakePieces -= Number(command);
    command = input[index++];
  }
  if (cakePieces < 0) {
    console.log(
      `No more cake left! You need ${Math.abs(cakePieces)} pieces more.`
    );
  }
}
cake(["10", "10", "20", "20", "20", "20", "21"]);
cake(["10", "2", "2", "4", "6", "STOP"]);
