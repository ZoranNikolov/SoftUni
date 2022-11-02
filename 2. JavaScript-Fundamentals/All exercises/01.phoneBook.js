function phoneBook(array) {
  let phoneBook = {};

  array.forEach((el) => {
    let [name, phoneNumber] = el.split(" ");
    phoneBook[name] = phoneNumber;
  });

  for (const info in phoneBook) {
    console.log(`${info} -> ${phoneBook[info]}`);
  }
}
phoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
