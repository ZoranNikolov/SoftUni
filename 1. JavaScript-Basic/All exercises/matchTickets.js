function matchTickets(input) {
  const ticketNormal = 249.99;
  const ticketVIP = 499.99;

  let budget = Number(input[0]);
  const ticketType = input[1];
  const peopleInGroup = Number(input[2]);

  let neededMoney = 0;
  let difference = 0;

  if (peopleInGroup >= 1 && peopleInGroup <= 4) {
    budget *= 0.25;
  } else if (peopleInGroup >= 5 && peopleInGroup <= 9) {
    budget *= 0.4;
  } else if (peopleInGroup >= 10 && peopleInGroup <= 24) {
    budget *= 0.5;
  } else if (peopleInGroup >= 25 && peopleInGroup <= 49) {
    budget *= 0.6;
  } else if (peopleInGroup >= 50) {
    budget *= 0.75;
  }

  switch (ticketType) {
    case "Normal":
      neededMoney = peopleInGroup * ticketNormal;
      difference = Math.abs(budget - neededMoney).toFixed(2);
      if (budget >= neededMoney) {
        console.log(`Yes! You have ${difference} leva left.`);
      } else {
        console.log(`Not enough money! You need ${difference} leva.`);
      }
      break;
    case "VIP":
      neededMoney = peopleInGroup * ticketVIP;
      difference = Math.abs(budget - neededMoney).toFixed(2);
      if (budget >= neededMoney) {
        console.log(`Yes! You have ${difference} leva left.`);
      } else {
        console.log(`Not enough money! You need ${difference} leva.`);
      }
      break;
  }
}
matchTickets(["30000", "VIP", "49"]);
matchTickets(["1000", "Normal", "1"]);
