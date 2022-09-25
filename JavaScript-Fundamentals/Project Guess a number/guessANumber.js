const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let computerGuess = Math.floor(Math.random() * 100);

let recursiveAsyncReadline = function () {
  readline.question("Guess the number (0-100): ", (number) => {});
};
recursiveAsyncReadline();

if (guess <= 100 && guess >= 0) {
  if (guess == computerGuess) {
    console.log("You guess it!");
    return readline.close();
  }
}
