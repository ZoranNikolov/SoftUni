function nextDay(year, month, day) {
  let daysPerMonth = 0;

  switch (month) {
    case 1:
      daysPerMonth = 31;
      break;
    case 2:
      if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        daysPerMonth = 29;
      } else {
        daysPerMonth = 28;
      }
      break;
    case 3:
      daysPerMonth = 31;
      break;
    case 4:
      daysPerMonth = 30;
      break;
    case 5:
      daysPerMonth = 31;
      break;
    case 6:
      daysPerMonth = 30;
      break;
    case 7:
      daysPerMonth = 31;
      break;
    case 8:
      daysPerMonth = 31;
      break;
    case 9:
      daysPerMonth = 30;
      break;
    case 10:
      daysPerMonth = 31;
      break;
    case 11:
      daysPerMonth = 30;
      break;
    case 12:
      daysPerMonth = 31;
      break;
  }

  day += 1;

  if (day > daysPerMonth) {
    day = 1;
    month += 1;
    if (month > 12) {
      month = 1;
      year += 1;
    }
  }
  console.log(`${year}-${month}-${day}`);
}
// nextDay(2016, 9, 30);
// nextDay(2020, 3, 24);
nextDay(1, 1, 1);
