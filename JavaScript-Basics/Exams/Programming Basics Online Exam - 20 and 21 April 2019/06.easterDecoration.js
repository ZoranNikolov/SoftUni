function easterDecoration(input) {
  let index = 0;
  let totalPrice = 0;
  let clients = Number(input[index++]);

  for (let i = 0; i < clients; i++) {
    let command = input[index++];
    let buyings = 0;
    let price = 0;
    while (command !== "Finish") {
      switch (command) {
        case "basket":
          price += 1.5;
          break;
        case "wreath":
          price += 3.8;
          break;
        case "chocolate bunny":
          price += 7;
          break;
      }
      buyings++;
      command = input[index++];
    }
    if (buyings % 2 == 0) {
      price *= 0.8;
    }
    totalPrice += price;
    console.log(`You purchased ${buyings} items for ${price.toFixed(2)} leva.`);
  }
  console.log(
    `Average bill per client is: ${(totalPrice / clients).toFixed(2)} leva.`
  );
}
easterDecoration([
  "2",
  "basket",
  "wreath",
  "chocolate bunny",
  "Finish",
  "wreath",
  "chocolate bunny",
  "Finish",
]);
