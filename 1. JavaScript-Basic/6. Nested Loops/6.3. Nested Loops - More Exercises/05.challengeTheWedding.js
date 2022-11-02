function challengeTheWedding(input) {
  let clientsM = Number(input[0]);
  let clientsF = Number(input[1]);
  let tables = Number(input[2]);
  let counter = 0;
  let isFinished = false;
  let res = "";
  for (let i = 1; i <= clientsM; i++) {
    for (let j = 1; j <= clientsF; j++) {
      res += `(${i} <-> ${j}) `;
      counter++;
      if (counter === tables) {
        isFinished = true;
        break;
      }
    }
    if (isFinished) {
      break;
    }
  }
  console.log(res);
}
challengeTheWedding(["5", "8", "40"]);
