function train(array) {
  let wagons = array.shift().split(" ").map(Number);
  let maxCapacity = Number(array.shift());

  for (let i = 0; i < array.length; i++) {
    let commandNum = array[i].split(" ");
    if (commandNum[0] === "Add") {
      wagons.push(Number(commandNum[1]));
    } else {
      for (let j = 0; j < wagons.length; j++) {
        if (Number(commandNum) + wagons[j] <= maxCapacity) {
          wagons[j] += Number(commandNum);
          break;
        }
      }
    }
  }
  console.log(wagons.join(" "));
}
train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
train(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"]);
