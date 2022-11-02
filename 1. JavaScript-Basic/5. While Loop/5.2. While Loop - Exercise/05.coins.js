function coins(input) {
  let change = Number(input[0]);
  let convertedChange = parseInt(change * 100);
  let coins = 0;

  while (convertedChange > 0) {
    if (convertedChange >= 200) {
      convertedChange -= 200;
    } else if (convertedChange >= 100) {
      convertedChange -= 100;
    } else if (convertedChange >= 50) {
      convertedChange -= 50;
    } else if (convertedChange >= 20) {
      convertedChange -= 20;
    } else if (convertedChange >= 10) {
      convertedChange -= 10;
    } else if (convertedChange >= 5) {
      convertedChange -= 5;
    } else if (convertedChange >= 2) {
      convertedChange -= 2;
    } else if (convertedChange >= 1) {
      convertedChange -= 1;
    }
    coins++;
  }
  console.log(coins);
}
coins(["1.23"]);
coins(["2"]);
coins(["0.56"]);
coins(["2.73"]);
