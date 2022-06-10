function walking(input) {
  let index = 0;
  let command = input[index++];
  let endGoal = 10000;

  while (command !== "Going home") {
    let steps = Number(command);
    endGoal -= steps;
    if (endGoal <= 0) {
      console.log("Goal reached! Good job!");
      console.log(`${Math.abs(endGoal)} steps over the goal!`);
      break;
    }
    command = input[index++];
  }
  if (command === "Going home") {
    command = input[index++];
    stepstLeft = Number(command);
    endGoal -= stepstLeft;
    if (endGoal <= 0) {
      console.log("Goal reached! Good job!");
      console.log(`${Math.abs(endGoal)} steps over the goal!`);
    } else {
      console.log(`${endGoal} more steps to reach goal.`);
    }
  }
}
walking(["1000", "1500", "2000", "6500"]);
walking(["1500", "300", "2500", "3000", "Going home", "200"]);
walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
walking(["125", "250", "4000", "30", "2678", "4682"]);
