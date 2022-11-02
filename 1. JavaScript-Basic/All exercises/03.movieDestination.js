function movieDestination(input) {
  let budget = Number(input[0]);
  let destination = input[1];
  let season = input[2];
  let days = Number(input[3]);
  price = 0;

  switch (season) {
    case "Winter":
      switch (destination) {
        case "Dubai":
          price = 45000;
          break;
        case "Sofia":
          price = 17000;
          break;
        case "London":
          price = 24000;
          break;
      }
      break;
    case "Summer":
      switch (destination) {
        case "Dubai":
          price = 40000;
          break;
        case "Sofia":
          price = 12500;
          break;
        case "London":
          price = 20250;
          break;
      }
      break;
  }
  price *= days;
  if (destination === "Dubai") {
    price *= 0.7;
  } else if (destination === "Sofia") {
    price *= 1.25;
  }
  let diff = Math.abs(price - budget);
  if (budget >= price) {
    console.log(
      `The budget for the movie is enough! We have ${diff.toFixed(
        2
      )} leva left!`
    );
  } else {
    console.log(`The director needs ${diff.toFixed(2)} leva more!`);
  }
}
movieDestination(["400000", "Sofia", "Winter", "20"]);
