function movieProfit(input) {
  let movie = input[0];
  let days = Number(input[1]);
  let tickets = Number(input[2]);
  let price = Number(input[3]);
  let percent = Number(input[4]);

  let income = days * tickets * price;
  income -= (income * percent) / 100;
  console.log(`The profit from the movie ${movie} is ${income.toFixed(2)} lv.`);
}
movieProfit(["The Jungle", "22", "20500", "9.37", "30"]);
