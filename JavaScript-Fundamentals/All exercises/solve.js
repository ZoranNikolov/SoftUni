function phoneBook(array) {
  let phoneBook = new Map();

  array.forEach((el) => {
    let [name, phoneNumber] = el.split(" ");
    //   phoneBook[name] = phoneNumber;
    phoneBook.set(name, phoneNumber);
  });

  for (let key of phoneBook.keys()) {
    console.log(key, "->", phoneBook.get(key));
  }
  //   for (const info in phoneBook) {
  //     console.log(`${info} -> ${phoneBook[info]}`);
  //   }
}
phoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
