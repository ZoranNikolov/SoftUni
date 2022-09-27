function meetings(data) {
  let res = {};

  data.forEach((el) => {
    let [day, name] = el.split(" ");

    if (res.hasOwnProperty(day)) {
      //   console.log(`Conflict on ${day}!`);
    } else {
      res[day] = name;
      //   console.log(`Scheduled for ${day}`);
    }
  });

  let entries = Object.entries(res);
  let sortedEntries = entries.sort(([keyA, valueA], [keyB, valueB]) => {
    // console.log(a[0]);
    // console.log(b[0]);
    // console.log("------------------");
    return keyA.localeCompare(keyB);
  });

  console.table(sortedEntries);

}
meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
