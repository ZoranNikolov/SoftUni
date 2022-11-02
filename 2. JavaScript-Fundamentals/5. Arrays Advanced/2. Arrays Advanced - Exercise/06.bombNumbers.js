function bombNumbers(sequence, nums) {
  let bombNumber = nums[0];
  let bombPower = nums[1];

  while (sequence.includes(bombNumber)) {
    let detect = sequence.indexOf(bombNumber);
    let numsToRemove = bombPower * 2 + 1;
    let startIndexToRemove = detect - bombPower;

    if (startIndexToRemove < 0) {
      numsToRemove += startIndexToRemove;
      startIndexToRemove = 0;
    }
    sequence.splice(startIndexToRemove, numsToRemove);
  }

  console.log(sequence.reduce((a, b) => a + b, 0));
}
bombNumbers([1, 4, 1, 1, 1, 1, 1, 4, 1], [4, 2]);
// bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
// bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
// bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
