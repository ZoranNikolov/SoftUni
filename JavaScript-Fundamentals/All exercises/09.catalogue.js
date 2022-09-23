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
