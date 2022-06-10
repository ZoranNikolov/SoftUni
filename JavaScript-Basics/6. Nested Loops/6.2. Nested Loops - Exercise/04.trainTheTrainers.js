function trainTheTrainers(input) {
  let index = 0;
  let countOfJury = Number(input[index]);
  index++;
  let command = input[index];
  index++;
  let countOfGrades = 0;
  let avgGrade = 0;
  while (command !== "Finish") {
    countOfGrades++;
    let presentationName = command;
    let tempAvgGrade = 0;
    for (let i = 0; i < countOfJury; i++) {
      let tempGrade = Number(input[index]);
      index++;
      tempAvgGrade += tempGrade;
    }
    tempAvgGrade = tempAvgGrade / countOfJury;
    let presentationResult = `${presentationName} - ${tempAvgGrade.toFixed(2)}`;
    console.log(`${presentationResult}.`);
    avgGrade += tempAvgGrade;
    command = input[index];
    index++;
  }
  avgGrade = avgGrade / countOfGrades;
  console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`);
}
trainTheTrainers([
  "2",
  "Objects and Classes",
  "5.77",
  "4.23",
  "Dictionaries",
  "4.62",
  "5.02",
  "RegEx",
  "2.88",
  "3.42",
  "Finish",
]);
