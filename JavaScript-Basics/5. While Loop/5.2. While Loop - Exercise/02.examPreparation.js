function examPreparation(input) {
  let index = 0;
  let badGrades = Number(input[index++]);
  let taskName = "";
  let grade = Number.MAX_SAFE_INTEGER;
  let badGradeCounter = 0;
  let gradeCounter = 0;
  let gradeSum = 0;
  let isEnough = false;
  let lastTask = "";

  while (badGrades !== badGradeCounter) {
    if (grade <= 4) {
      badGradeCounter++;
    }

    taskName = input[index++];
    if (taskName === "Enough") {
      isEnough = true;
      lastTask = input[index - 3];
      break;
    }
    grade = Number(input[index++]);
    gradeSum += grade;
    gradeCounter++;
  }
  if (isEnough) {
    let avgGrade = gradeSum / gradeCounter;
    console.log(`Average score: ${avgGrade.toFixed(2)}`);
    console.log(`Number of problems: ${gradeCounter}`);
    console.log(`Last problem: ${lastTask}`);
  } else {
    console.log(`You need a break, ${badGradeCounter} poor grades.`);
  }
}
examPreparation([
  "3",
  "Money",
  "6",
  "Story",
  "4",
  "Spring Time",
  "5",
  "Bus",
  "6",
  "Enough",
]);
examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);
