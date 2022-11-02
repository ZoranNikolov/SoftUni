function hospital(input) {
  let index = 0;
  let days = Number(input[index++]);

  let doctorsCount = 7;
  let patients = 0;
  let treatedCounter = 0;
  let untreatedCounter = 0;

  for (let i = 1; i <= days; i++) {
    if (i % 3 === 0) {
      if (untreatedCounter > treatedCounter) {
        doctorsCount++;
      }
    }
    patients = Number(input[index++]);
    let diff = Math.abs(patients - doctorsCount);

    if (patients <= doctorsCount) {
      treatedCounter += patients;
    } else {
      treatedCounter += doctorsCount;
      untreatedCounter += diff;
    }
  }
  console.log(`Treated patients: ${treatedCounter}.`);
  console.log(`Untreated patients: ${untreatedCounter}.`);
}

hospital(["6", "25", "25", "25", "25", "25", "2"]);