function computerFirm(input) {
  let index = 0;
  let computers = Number(input[index++]);
  let currentRating = 0;
  let rating = 0;
  let currentSales = 0;
  let sales = 0;

  for (let i = 0; i < computers; i++) {
    let computer = input[index++];
    let first2Str = String(computer).slice(0, 2);
    let possibleSales = Number(first2Str);
    let currentRating = Number(computer.charAt(2));

    if (currentRating === 2) {
      currentSales = 0;
    } else if (currentRating === 3) {
      currentSales = possibleSales * 0.5;
    } else if (currentRating === 4) {
      currentSales = possibleSales * 0.7;
    } else if (currentRating === 5) {
      currentSales = possibleSales * 0.85;
    } else if (currentRating === 6) {
      currentSales = possibleSales;
    }
    rating += currentRating;
    sales += currentSales;
  }
  rating = rating / computers;
  console.log(`${sales.toFixed(2)}`);
  console.log(`${rating.toFixed(2)}`);
}
computerFirm(["2", "204", "206"]);
