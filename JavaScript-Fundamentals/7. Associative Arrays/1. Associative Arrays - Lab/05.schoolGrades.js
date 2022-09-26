function schoolGrades(arr) {
  let res = {};

  arr.forEach((student) => {
    let tokens = student.split(" ");
    let name = tokens.shift();
    let grades = tokens.map(Number);

    if (res.hasOwnProperty(name)) {
      grades.forEach((grade) => {
        res[name].push(grade);
      });
    } else {
      res[name] = grades;
    }
  });

  for (let key in res) {
    let avgGrade = res[key].reduce((a, b) => a + b, 0) / res[key].length;
    res[key] = avgGrade;
  }

  let entries = Object.entries(res).sort(([keyA, valueA], [keyB, valueB]) => {
    return keyA.localeCompare(keyB);
  });

  for (const [name, grade] of entries) {
    console.log(`${name}: ${grade.toFixed(2)}`);
  }
}
schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
