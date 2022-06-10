function tennisEquipment(input) {
  let tennisRack = Number(input[0]);
  let amountTennisRack = Number(input[1]);
  let amountSneakers = Number(input[2]);
  let sneakers = tennisRack / 6;
  let sum = (tennisRack * amountTennisRack + amountSneakers * sneakers) * 1.2;
  let sum1 = Math.floor(sum / 8);
  let sum2 = Math.ceil((sum * 7) / 8);
  console.log(`Price to be paid by Djokovic ${sum1}`);
  console.log(`Price to be paid by sponsors ${sum2}`);
}
tennisEquipment(["850", "4", "2"]);
