function theMostPowerfulWord(input) {
  let index = 0;
  let command = input[index++];
  let bestScore = 0;
  let bestWord = "";
  let firstLetter = "";

  while (command !== "End of words") {
    let points = 0;
    for (let i = 0; i < command.length; i++) {
      points += command.charCodeAt(i);
      if (i === 0) {
        firstLetter = command[i];
      }
    }

    if (
      firstLetter === "a" ||
      firstLetter === "e" ||
      firstLetter === "i" ||
      firstLetter === "o" ||
      firstLetter === "u" ||
      firstLetter === "y" ||
      firstLetter === "A" ||
      firstLetter === "E" ||
      firstLetter === "I" ||
      firstLetter === "O" ||
      firstLetter === "U" ||
      firstLetter === "Y"
    ) {
      points *= Number(command.length);
    } else {
      points = Math.floor(points / Number(command.length));
    }

    if (points > bestScore) {
      bestScore = points;
      bestWord = command;
    }

    command = input[index++];
  }

  console.log(`The most powerful word is ${bestWord} - ${bestScore}`);
}
theMostPowerfulWord([
  "The",
  "Most",
  "Powerful",
  "Word",
  "Is",
  "Experience",
  "End of words",
]);
