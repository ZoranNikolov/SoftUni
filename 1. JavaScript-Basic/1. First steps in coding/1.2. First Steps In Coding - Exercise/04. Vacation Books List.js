function vacationBookList(input) {
  let pageNumber = Number(input[0]);
  let pagesPerHour = Number(input[1]);
  let days = Number(input[2]);

  let timeToRead = pageNumber / pagesPerHour;

  let timePerDay = timeToRead / days;

  console.log(timePerDay);
}
vacationBookList(["212 ", "20 ", "2 "]);
