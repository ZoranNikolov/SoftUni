function easterParty(input) {
  let guests = Number(input[0]);
  let pricePerGuest = Number(input[1]);
  let budget = Number(input[2]);

  let price = guests * pricePerGuest;

  if (guests >= 10 && guests <= 15) {
    price *= 0.85;
  } else if (guests > 15 && guests <= 20) {
    price *= 0.8;
  } else if (guests > 20) {
    price *= 0.75;
  }
  budget *= 0.9;
  let diff = Math.abs(price - budget);
  if (budget >= price) {
    console.log(`It is party time! ${diff.toFixed(2)} leva left.`);
  } else {
    console.log(`No party! ${diff.toFixed(2)} leva needed.`);
  }
}
easterParty(["18", "30", "450"]);
