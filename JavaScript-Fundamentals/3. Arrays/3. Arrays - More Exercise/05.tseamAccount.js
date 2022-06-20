function tseamAccount(array) {
  let workingArray = array.slice();
  let account = workingArray.shift().split(" ");
  let command = workingArray.shift();

  while (command !== "Play!") {
    let tempCommand = command.split(" ");
    switch (tempCommand[0]) {
      case "Install":
        if (!account.includes(tempCommand[1])) {
          account.push(tempCommand[1]);
        }
        break;
      case "Uninstall":
        if (account.includes(tempCommand[1])) {
          let index = account.indexOf(tempCommand[1]);
          account.splice(index, 1);
        }
        break;
      case "Update":
        if (account.includes(tempCommand[1])) {
          let index = account.indexOf(tempCommand[1]);
          account.splice(index, 1);
          account.push(tempCommand[1]);
        }
        break;
      case "Expansion":
        let game = tempCommand[1].split("-");
        let gameName = game[0];
        if (account.includes(gameName)) {
          account.splice(account.indexOf(game[0]) + 1, 0, game.join(":"));
        }
        break;
    }
    command = workingArray.shift();
  }
  console.log(account.join(" "));
}
tseamAccount([
  "CS WoW Diablo",
  "Install LoL",
  "Uninstall WoW",
  "Update Diablo",
  "Expansion CS-Go",
  "Play!",
]);
tseamAccount([
  "CS WoW Diablo",
  "Uninstall XCOM",
  "Update PeshoGame",
  "Update WoW",
  "Expansion Civ-V",
  "Play!",
]);
