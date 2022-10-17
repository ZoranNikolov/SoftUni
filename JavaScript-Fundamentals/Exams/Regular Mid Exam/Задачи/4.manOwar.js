function manOwar(input) {
  let pirateShipStatus = input.shift().split(">").map(Number);
  let warShipStatus = input.shift().split(">").map(Number);
  let maxHealth = Number(input.shift());
  let index = 0;
  let command = input[index++];

  while (command !== "Retire") {
    let commandArr = command.split(" ");
    let action = commandArr.shift();

    switch (action) {
      case "Fire":
        let fireIndex = Number(commandArr.shift());
        let fireDamage = Number(commandArr.shift());

        if (fireIndex >= 0 && fireIndex <= warShipStatus.length) {
          warShipStatus[fireIndex] -= fireDamage;

          if (warShipStatus[fireIndex] <= 0) {
            return "You won! The enemy ship has sunken.";
          }
        }

        break;
      case "Defend":
        let startIndex = Number(commandArr.shift());
        let endIndex = Number(commandArr.shift());
        let defendDamage = Number(commandArr.shift());

        if (
          startIndex >= 0 &&
          startIndex <= pirateShipStatus.length &&
          endIndex >= 0 &&
          endIndex <= pirateShipStatus.length
        ) {
          for (
            let currentSection = startIndex;
            currentSection <= endIndex;
            currentSection++
          ) {
            pirateShipStatus[currentSection] -= defendDamage;

            if (pirateShipStatus[currentSection] <= 0) {
              return "You lost! The pirate ship has sunken.";
            }
          }
        }

        break;
      case "Repair":
        let repairIndex = Number(commandArr.shift());
        let healthAdded = Number(commandArr.shift());

        if (repairIndex >= 0 && repairIndex <= pirateShipStatus.length) {
          pirateShipStatus[repairIndex] += healthAdded;

          if (pirateShipStatus[repairIndex] > maxHealth) {
            pirateShipStatus[repairIndex] = maxHealth;
          }
        }

        break;
      case "Status":
        let needRepairIndex = maxHealth * 0.2;
        let needRepairCounter = pirateShipStatus.filter(
          (x) => x < needRepairIndex
        ).length;

        console.log(`${needRepairCounter} sections need repair.`);

        break;
    }

    command = input[index++];
  }

  let pirateShipSectionsSum = pirateShipStatus.reduce((x, y) => x + y, 0);
  let warShipSectionsSum = warShipStatus.reduce((x, y) => x + y, 0);

  return `Pirate ship status: ${pirateShipSectionsSum}\nWarship status: ${warShipSectionsSum}
  `;
}

// console.log(
//   manOwar([
//     "12>13>11>20>66",
//     "12>22>33>44>55>32>18",
//     "70",
//     "Fire 2 11",
//     "Fire 8 100",
//     "Defend 3 6 11",
//     "Defend 0 3 5",
//     "Repair 1 33",
//     "Status",
//     "Retire",
//   ])
// );
console.log(
  manOwar([
    "2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire",
  ])
);
