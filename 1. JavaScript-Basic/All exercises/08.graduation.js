function graduation(input) {
  let index = 0;
  let student = input[index++];
  let studentClass = 1;
  let grade = 0;
  let gradeSum = 0;
  let failedCounter = 0;
  let isExcluded = false;

  while (studentClass <= 12) {
    grade = Number(input[index++]);
    if (grade < 4.0) {
      failedCounter++;
      continue;
    }
    if (failedCounter > 1) {
      isExcluded = true;
      break;
    }
    gradeSum += grade;
    studentClass++;
  }
  if (!isExcluded) {
    let avgGrade = gradeSum / 12;
    console.log(`${student} graduated. Average grade: ${avgGrade.toFixed(2)}`);
  } else {
    console.log(`${student} has been excluded at ${studentClass} grade`);
  }
}
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);