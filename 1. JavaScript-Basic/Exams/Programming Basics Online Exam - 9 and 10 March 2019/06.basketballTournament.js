function basketballTournament(input) {
  let index = 0;
  let counterWinsPerTournament = 0;
  let counterWins = 0;
  let counterLossesPerTournament = 0;
  let counterLosses = 0;
  let command = input[index++];

  while (command !== "End of tournaments") {
    let tournament = command;
    let matchesPerTournament = Number(input[index++]);
    for (let i = 1; i <= matchesPerTournament; i++) {
      let desiTeamPts = Number(input[index++]);
      let enemyTeamPts = Number(input[index++]);
      let diff = Math.abs(desiTeamPts - enemyTeamPts);
      if (desiTeamPts > enemyTeamPts) {
        counterWinsPerTournament++;
        counterWins++;
        console.log(
          `Game ${i} of tournament ${tournament}: win with ${diff} points.`
        );
      } else if (desiTeamPts < enemyTeamPts) {
        counterLossesPerTournament++;
        counterLosses++;
        console.log(
          `Game ${i} of tournament ${tournament}: lost with ${diff} points.`
        );
      }
    }
    command = input[index++];
  }
  let totalMatches = counterLosses + counterWins;
  let percentWins = (counterWins / totalMatches) * 100;
  let percentLosses = (counterLosses / totalMatches) * 100;

  console.log(`${percentWins.toFixed(2)}% matches win`);
  console.log(`${percentLosses.toFixed(2)}% matches lost`);
}
basketballTournament([
  "Ballers",
  "3",
  "87",
  "63",
  "56",
  "65",
  "75",
  "64",
  "Sharks",
  "4",
  "64",
  "76",
  "65",
  "86",
  "68",
  "99",
  "45",
  "78",
  "End of tournaments",
]);
