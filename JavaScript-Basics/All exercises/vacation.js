function vacation(input) {
  const budget = Number(input[0]);
  const season = input[1];

  let settleMentType = ""; // "Hotel", "Hut" или "Camp"
  let location = ""; // "Alaska" и "Morocco"
  let vacationPrice = 0;

  if (budget <= 1000) {
    settleMentType = "Camp";
    switch (season) {
      case "Summer":
        location = "Alaska";
        vacationPrice = budget * 0.65;
        break;
      case "Winter":
        location = "Morocco";
        vacationPrice = budget * 0.45;
        break;
    }
  } else if (budget > 1000 && budget <= 3000) {
    settleMentType = "Hut";
    switch (season) {
      case "Summer":
        location = "Alaska";
        vacationPrice = budget * 0.8;
        break;
      case "Winter":
        location = "Morocco";
        vacationPrice = budget * 0.6;
        break;
    }
  } else {
    settleMentType = "Hotel";
    switch (season) {
      case "Summer":
        location = "Alaska";
        break;
      case "Winter":
        location = "Morocco";
        break;
    }
    vacationPrice = budget * 0.9;
  }
  console.log(`${location} - ${settleMentType} - ${vacationPrice.toFixed(2)}`);
}
vacation(["800", "Summer"]);
vacation(["799.50", "Winter"]);
vacation(["3460", "Summer"]);
vacation(["1100", "Summer"]);
vacation(["5000", "Winter"]);
vacation(["2543.99", "Winter"]);

