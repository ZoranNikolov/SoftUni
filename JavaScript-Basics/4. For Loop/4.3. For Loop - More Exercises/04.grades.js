function grades(input) {
  let index = 0;
  let students = Number(input[index++]);

  let gradeSum = 0;
  let grade5to6Counter = 0;
  let grade4to499Counter = 0;
  let grade3to399Counter = 0;
  let grade2to299Counter = 0;

  for (let i = 1; i <= students; i++) {
    let grade = Number(input[index++]);
    gradeSum += grade;
    if (grade >= 5) {
      grade5to6Counter++;
    } else if (grade >= 4 && grade <= 4.99) {
      grade4to499Counter++;
    } else if (grade >= 3 && grade <= 3.99) {
      grade3to399Counter++;
    } else {
      grade2to299Counter++;
    }
  }
  let avgGrade = gradeSum / students;
  let fiveToSix = (grade5to6Counter / students) * 100;
  let fourToFive = (grade4to499Counter / students) * 100;
  let threeToFour = (grade3to399Counter / students) * 100;
  let twoToThree = (grade2to299Counter / students) * 100;

  console.log(`Top students: ${fiveToSix.toFixed(2)}%`);
  console.log(`Between 4.00 and 4.99: ${fourToFive.toFixed(2)}%`);
  console.log(`Between 3.00 and 3.99: ${threeToFour.toFixed(2)}%`);
  console.log(`Fail: ${twoToThree.toFixed(2)}%`);
  console.log(`Average: ${avgGrade.toFixed(2)}`);
}
grades([
  "10",
  "3.00",
  "2.99",
  "5.68",
  "3.01",
  "4",
  "4",
  "6.00",
  "4.50",
  "2.44",
  "5",
]);