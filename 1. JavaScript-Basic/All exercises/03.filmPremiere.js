function filmPremiere(input) {
  let film = input[0];
  let package = input[1];
  let tickets = Number(input[2]);
  price = 0;

  switch (package) {
    case "Drink":
      switch (film) {
        case "John Wick":
          price = 12;
          break;
        case "Star Wars":
          price = 18;
          break;
        case "Jumanji":
          price = 9;
          break;
      }
      break;
    case "Popcorn":
      switch (film) {
        case "John Wick":
          price = 15;
          break;
        case "Star Wars":
          price = 25;
          break;
        case "Jumanji":
          price = 11;
          break;
      }
      break;
    case "Menu":
      switch (film) {
        case "John Wick":
          price = 19;
          break;
        case "Star Wars":
          price = 30;
          break;
        case "Jumanji":
          price = 14;
          break;
      }
      break;
  }
  price *= tickets;

  if (film === 'Star Wars' && tickets >= 4) {
    price *= 0.7;
  } else if (film === "Jumanji" && tickets === 2) {
    price *= 0.85;
  }
  console.log(`Your bill is ${price.toFixed(2)} leva.`);
}
filmPremiere(["John Wick", "Drink", "6"]);
