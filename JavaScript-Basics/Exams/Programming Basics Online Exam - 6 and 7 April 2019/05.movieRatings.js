function movieRatings(input) {
  let index = 0;
  let amount = Number(input[index++]);
  let sumRating = 0;
  let highestRatingMovie = "";
  let highestRating = 0;
  let lowestRatingMovie = "";
  let lowestRating = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < amount; i++) {
    let name = input[index++];
    let rating = Number(input[index++]);
    if (rating > highestRating) {
      highestRating = rating;
      highestRatingMovie = name;
    }
    if (rating < lowestRating) {
      lowestRating = rating;
      lowestRatingMovie = name;
    }
    sumRating += rating;
  }
  let averageRating = sumRating / amount;

  console.log(
    `${highestRatingMovie} is with highest rating: ${highestRating.toFixed(1)}`
  );
  console.log(
    `${lowestRatingMovie} is with lowest rating: ${lowestRating.toFixed(1)}`
  );
  console.log(`Average rating: ${averageRating.toFixed(1)}`);
}
movieRatings([
  "5",
  "A Star is Born",
  "7.8",
  "Creed 2",
  "7.3",
  "Mary Poppins",
  "7.2",
  "Vice",
  "7.2",
  "Captain Marvel",
  "7.1",
]);
