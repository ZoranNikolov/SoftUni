function meetings(data) {
  let res = {};

  data.forEach((el) => {
    let [day, name] = el.split(" ");

    if (res.hasOwnProperty(day)) {
      console.log(`Conflict on ${day}!`);
    } else {
      res[day] = name;
      console.log(`Scheduled for ${day}`);
    }
  });


  
}
meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
