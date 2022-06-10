function easterGuests(input) {
  let guests = Number(input[0]);
  let budget = Number(input[1]);

  let price = Math.ceil(guests / 3) * 4 + guests * 0.45 * 2;
  let diff = Math.abs(price - budget);

  if (budget >= price) {
    console.log(
      `Lyubo bought ${Math.ceil(guests / 3)} Easter bread and ${
        guests * 2
      } eggs.`
    );
    console.log(`He has ${diff.toFixed(2)} lv. left.`);
  } else {
    console.log("Lyubo doesn't have enough money.");
    console.log(`He needs ${diff.toFixed(2)} lv. more.`);
  }
}
easterGuests(["10", "35"]);
