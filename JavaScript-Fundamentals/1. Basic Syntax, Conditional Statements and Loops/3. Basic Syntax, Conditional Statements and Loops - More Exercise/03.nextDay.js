function nextDay(year, month, day) {
  let date = new Date(year, month - 1, day);
  date.setDate(date.getDate() + 1);
  let dateString = date.toISOString().slice(0, 10);
  console.log(dateString.replace(/\b0/g, ""));
}
nextDay(2016, 9, 30);
nextDay(2020, 3, 24);
nextDay(1, 1, 1);
