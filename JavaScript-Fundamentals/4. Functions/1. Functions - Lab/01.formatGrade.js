function formatGrade(grade) {
  let result = "";
  if (grade < 3) {
    result = `Fail (2)`;
  } else if (grade < 3.5) {
    result = `Poor (${grade.toFixed(2)})`;
  } else if (grade < 4.5) {
    result = `Good (${grade.toFixed(2)})`;
  } else if (grade < 5.5) {
    result = `Very good (${grade.toFixed(2)})`;
  } else {
    result = `Excellent (${grade.toFixed(2)})`;
  }
  console.log(result);
}
formatGrade(3.33);
formatGrade(4.5);
formatGrade(5.9);
