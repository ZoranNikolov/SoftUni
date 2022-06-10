function traveling(input) {
  let index = 0;
  let command = "";
  let minBudget = 0;
  let destination = "";
  let savedMoney = Number.MIN_SAFE_INTEGER;
  let isEnd = false;

  while (command !== "End") {
    while (minBudget > savedMoney) {
      command = input[index++];
      if (command === "End") {
        isEnd = true;
        break;
      }
      if (command.match(/[a-z]/i)) {
        destination = command;
        command = input[index++];
        minBudget = Number(command);
        savedMoney = 0;
      } else {
        savedMoney += Number(command);
      }
    }
    if (isEnd) {
      break;
    } else {
      console.log(`Going to ${destination}!`);
      savedMoney = 0;
    }
  }
}
traveling([
  "Greece",
  "1000",
  "200",
  "200",
  "300",
  "100",
  "150",
  "240",
  "Spain",
  "1200",
  "300",
  "500",
  "193",
  "423",
  "End",
]);
traveling([
  "France",
  "2000",
  "300",
  "300",
  "200",
  "400",
  "190",
  "258",
  "360",
  "Portugal",
  "1450",
  "400",
  "400",
  "200",
  "300",
  "300",
  "Egypt",
  "1900",
  "1000",
  "280",
  "300",
  "500",
  "End",
]);

// function traveling(input) {
//   let index = 0;
//   let command = input[index++];
//   let minBudget = Number(input[index++]);
//   let savedMoney = 0;
//   while (command !== "End") {
//     while (minBudget > savedMoney) {
//       savedMoney += Number(input[index++]);
//     }
//     console.log(`Going to ${command}!`);
//     command = input[index++];
//     minBudget = Number(input[index++]);
//     savedMoney = 0;
//   }
// }