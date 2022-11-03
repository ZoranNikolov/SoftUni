function cardGame(array) {
  let players = new Map();

  for (const line of array) {
    let [name, deckAsString] = line.split(": ");
    deck = deckAsString.split(", ");
    if (!players.has(name)) {
      players.set(name, new Set());
    }

    for (const card of deck) {
      players.get(name).add(card);
    }
  }
  for (const [key, value] of players) {
    let sum = cardCalculation(value);
    console.log(`${key}: ${sum}`);
  }

  function cardCalculation(cards) {
    let enumPower = {
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      10: 10,
      J: 11,
      Q: 12,
      K: 13,
      A: 14,
    };

    let enumType = {
      S: 4,
      H: 3,
      D: 2,
      C: 1,
    };
    let sum = 0;
    for (const card of cards) {
      let tokens = card.split("");
      let cardType = tokens.pop();
      let cardPower = tokens.join("");
      let cardPowerNumber = Number(enumPower[cardPower]);
      let cardPowerType = enumType[cardType];
      sum += cardPowerNumber * cardPowerType;
    }
    return sum;
  }
}
cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);
