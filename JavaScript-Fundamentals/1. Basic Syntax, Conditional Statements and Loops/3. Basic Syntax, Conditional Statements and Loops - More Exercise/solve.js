function nextDay(input) {
  let date = new Date("2022.05.25");
  console.log(date.getDay());
  console.log(date.getFullYear());
  console.log(date.toDateString());
  console.log(date.toLocaleDateString("de"));
}
nextDay();
