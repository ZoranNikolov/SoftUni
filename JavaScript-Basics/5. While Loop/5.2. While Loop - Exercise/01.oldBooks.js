function oldBooks(input) {
  let index = 0;
  let searchedBook = input[index++];
  let bookIsFound = false;
  let nextBook = input[index++];
  let counter = 0;

  while (nextBook !== "No More Books") {
    if (nextBook === searchedBook) {
      bookIsFound = true;
      break;
    }
    nextBook = input[index++];
    counter++;
  }

  if (bookIsFound) {
    console.log(`You checked ${counter} books and found it.`);
  } else {
    console.log(`The book you search is not here!`);
    console.log(`You checked ${counter} books.`);
  }
}
oldBooks(["Troy", "Stronger", "Life Style", "Troy"]);
oldBooks([
  "The Spot",
  "Hunger Games",
  "Harry Potter",
  "Torronto",
  "Spotify",
  "No More Books",
]);
oldBooks([
  "Bourne",
  "True Story",
  "Forever",
  "More Space",
  "The Girl",
  "Spaceship",
  "Strongest",
  "Profit",
  "Tripple",
  "Stella",
  "The Matrix",
  "Bourne",
]);
