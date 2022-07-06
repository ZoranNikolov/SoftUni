function arrayManipulator(nums, commands) {
  for (let i = 0; i < commands.length; i++) {
    let currentValues = commands[i].split(" ");
    let currentCommand = currentValues.shift();
    let sumPairs = 0;
    let pairsOfSumNums = [];

    switch (currentCommand) {
      case "add":
        let indexToAdd = Number(currentValues[0]);
        let elementToAdd = Number(currentValues[1]);
        nums.splice(indexToAdd, 0, elementToAdd);
        break;
      case "addMany":
        let indexToAddMany = Number(currentValues.shift());
        let elementToAddMany = currentValues;
        let currentElementToAddMany = 0;
        for (let i = elementToAddMany.length - 1; i >= 0; i--) {
          currentElementToAddMany = Number(elementToAddMany[i]);
          nums.splice(indexToAddMany, 0, currentElementToAddMany);
        }
        break;
      case "contains":
        console.log(nums.indexOf(Number(currentValues[0])));
        break;
      case "remove":
        let indexToRemove = Number(currentValues[0]);
        nums.splice(indexToRemove, 1);
        break;
      case "shift":
        for (let i = 0; i < currentValues[0]; i++) {
          nums.push(nums.shift());
        }
        break;
      case "sumPairs":
        if (nums.length % 2 !== 0) {
          nums.push(0);
        }
        for (let i = 0; i < nums.length; i += 2) {
          sumPairs = nums[i] + nums[i + 1];
          pairsOfSumNums.push(sumPairs);
        }
        nums = [...pairsOfSumNums];
        break;
      case "print":
        console.log(`[ ${nums.join(", ")} ]`);
        return;
    }
  }
}
arrayManipulator(
  [1, 2, 3, 4, 5],
  ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]
);
