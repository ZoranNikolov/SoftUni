function requiredReading(pages, pagesPerHour, days) {
  let hours = pages / pagesPerHour;
  hours /= days;
  console.log(hours);
}
requiredReading(212, 20, 2);
requiredReading(432, 15, 4);
