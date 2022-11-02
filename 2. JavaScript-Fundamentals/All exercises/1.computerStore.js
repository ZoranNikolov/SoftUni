function computerStore(data) {
  let index = 0;
  let priceWithoutTaxes = 0;
  let taxes = 0;
  let totalPrice = 0;
  let command = data[index++];

  while (command !== "special") {
    if (command === "regular") {
      break;
    }

    if (Number(command) < 0) {
      console.log("Invalid price!");
      command = data[index++];
      continue;
    }

    priceWithoutTaxes += Number(command);
    command = data[index++];
  }

  taxes = priceWithoutTaxes * 0.2;
  totalPrice = taxes + priceWithoutTaxes;

  if (command === "special") {
    totalPrice *= 0.9;
  }

  if (totalPrice === 0) {
    console.log("Invalid order!");
  } else {
    console.log(
      `Congratulations you've just bought a new computer!\nPrice without taxes: ${priceWithoutTaxes.toFixed(
        2
      )}$\nTaxes: ${taxes.toFixed(
        2
      )}$\n-----------\nTotal price: ${totalPrice.toFixed(2)}$`
    );
  }
}
// computerStore(["1050", "200", "450", "2", "18.50", "16.86", "special"]);
computerStore([
  "1023",
  "15",
  "-20",
  "-5.50",
  "450",
  "20",
  "17.66",
  "19.30",
  "regular",
]);
computerStore(["regular"]);
