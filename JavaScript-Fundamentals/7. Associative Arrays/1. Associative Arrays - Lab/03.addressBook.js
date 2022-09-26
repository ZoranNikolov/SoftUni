function addressBook(arr) {
  let res = {};

  arr.forEach((el) => {
    let [name, address] = el.split(":");
    res[name] = address;
  });

  let entries = Object.entries(res);
  let sortedEntries = entries.sort(([keyA, valueA], [keyB, valueB]) => {
    return keyA.localeCompare(keyB);
  });

  for (const [name, address] of sortedEntries) {
    console.log(`${name} -> ${address}`);
  }
  
}
addressBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
