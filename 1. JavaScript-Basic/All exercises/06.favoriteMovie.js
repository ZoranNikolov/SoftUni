function favoriteMovie(input) {
  let index = 0;
  let command = input[index++];
  let limit = 7;
  let counter = 0;
  let bestResult = 0;
  let bestMovie = "";

  while (command !== "STOP") {
    movie = String(command);
    let currentPoints = 0;
    for (let i = 0; i < movie.length; i++) {
      currentPoints += movie.charCodeAt(i);
      if (movie.charCodeAt(i) >= 97 && movie.charCodeAt(i) <= 122) {
        currentPoints -= movie.length * 2;
      } else if (movie.charCodeAt(i) >= 65 && movie.charCodeAt(i) <= 90){
        currentPoints -= movie.length;
      }
    }
    if (currentPoints > bestResult) {
      bestResult = currentPoints;
      bestMovie = movie;
    }
    counter++;
    if (counter === limit) {
      console.log("The limit is reached.");
      break;
    }
    command = input[index++];
  }
  console.log(
    `The best movie for you is ${bestMovie} with ${bestResult} ASCII sum.`
  );
}
favoriteMovie([
  "Wrong turn",
  "The maze",
  "Area 51",
  "Night Club",
  "Ice age",
  "Harry Potter",
  "Wizards",
]);