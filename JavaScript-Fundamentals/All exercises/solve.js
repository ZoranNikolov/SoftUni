function catalogue(arr) {
  let newArr = [];
  let char;
  let isUnique = true;

  arr.forEach((el) => {
    newArr.push(el.replace(" :", ":"));
  });

  newArr.sort((a, b) => a.localeCompare(b));

  for (const el of newArr) {
    char === el[0] ? (isUnique = false) : (isUnique = true);
    if (isUnique) {
      char = el[0];
      console.log(el[0]);
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
