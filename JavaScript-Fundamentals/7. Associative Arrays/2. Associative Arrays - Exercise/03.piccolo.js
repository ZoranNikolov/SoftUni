function piccolo(array) {
  let parking = new Set();

  array.forEach((line) => {
    let [command, carNumber] = line.split(", ");
    switch (command) {
      case "IN":
        parking.add(carNumber);
        break;
      case "OUT":
        parking.delete(carNumber);
        break;
    }
  });

  if (parking.size === 0) {
    return console.log("Parking Lot is Empty");
  }

  let sorted = Array.from(parking.values()).sort();

  console.log(sorted.join("\n"));
}
piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
piccolo(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);
