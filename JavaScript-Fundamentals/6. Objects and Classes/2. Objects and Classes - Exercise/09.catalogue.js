function catalogue(array) {
  let sortedArray = [];
  let initial = "";
  let isUnique = true;

  array.map((el) => {
    sortedArray.push(el.replace(" :", ":"));
  });

  sortedArray.sort((a, b) => a.localeCompare(b));

  for (const el of sortedArray) {
    initial === el[0] ? (isUnique = false) : (isUnique = true);
    if (isUnique) {
      initial = el[0];
      console.log(initial);
      isUnique = false;
    }
    console.log(`  ${el}`);
  }
}
catalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
