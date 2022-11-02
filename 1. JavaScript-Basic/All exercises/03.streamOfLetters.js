function streamOfLetters(input) {
  let index = 0;
  let command = input[index++];
  let word = "";
  let finalWord = "";
  let isCmatched = false;
  let isOmatched = false;
  let isNmatched = false;

  while (command !== "End") {
    if (command.match(/[a-z]/i)) {
      if (command === "c") {
        if (isCmatched) {
          word += command;
        }
        isCmatched = true;
      } else if (command === "o") {
        if (isOmatched) {
          word += command;
        }
        isOmatched = true;
      } else if (command === "n") {
        if (isNmatched) {
          word += command;
        }
        isNmatched = true;
      } else {
        word += command;
      }

      if (isCmatched === true && isOmatched === true && isNmatched === true) {
        finalWord += `${word} `;
        word = "";
        isCmatched = false;
        isOmatched = false;
        isNmatched = false;
      }
    }
    command = input[index++];
  }
  console.log(`${finalWord}`);
}
streamOfLetters([
  "H",
  "n",
  "e",
  "l",
  "l",
  "o",
  "o",
  "c",
  "t",
  "c",
  "h",
  "o",
  "e",
  "r",
  "e",
  "n",
  "e",
  "End",
]);
streamOfLetters([
  "%",
  "!",
  "c",
  "^",
  "B",
  "`",
  "o",
  "%",
  "o",
  "o",
  "M",
  ")",
  "{",
  "n",
  "/",
  "A",
  "D",
  "End",
]);
streamOfLetters([
  "o",
  "S",
  "%",
  "o",
  "l",
  "^",
  "v",
  "e",
  "c",
  "n",
  "&",
  "m",
  "e",
  "c",
  "o",
  "n",
  "End",
]);
