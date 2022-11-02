function cinemaTickets(input) {
  let index = 0;
  let movie = "";
  let command = input[index++];
  let counterStudents = 0;
  let counterStandard = 0;
  let counterKids = 0;

  while (command !== "Finish") {
    movie = command;
    let freeSeats = input[index++];
    let takenSeats = 0;
    for (let i = 0; i < freeSeats; i++) {
      takenSeats = i + 1;
      command = input[index++];
      if (command === "End") {
        let percentage = (i / freeSeats) * 100;
        console.log(`${movie} - ${percentage.toFixed(2)}% full.`);
        break;
      } else if (command === "student") {
        counterStudents++;
      } else if (command === "standard") {
        counterStandard++;
      } else if (command === "kid") {
        counterKids++;
      }
    }
    if (command !== "End") {
      percentage = (takenSeats / freeSeats) * 100;
      console.log(`${movie} - ${percentage.toFixed(2)}% full.`);
    }
    command = input[index++];
  }
  let total = counterStudents + counterKids + counterStandard;
  console.log(`Total tickets: ${total}`);
  console.log(
    `${((counterStudents / total) * 100).toFixed(2)}% student tickets.`
  );
  console.log(
    `${((counterStandard / total) * 100).toFixed(2)}% standard tickets.`
  );
  console.log(`${((counterKids / total) * 100).toFixed(2)}% kids tickets.`);
}
cinemaTickets([
  "The Matrix",
  "20",
  "student",
  "standard",
  "kid",
  "kid",
  "student",
  "student",
  "standard",
  "student",
  "End",
  "The Green Mile",
  "17",
  "student",
  "standard",
  "standard",
  "student",
  "standard",
  "student",
  "End",
  "Amadeus",
  "3",
  "standard",
  "standard",
  "standard",
  "Finish",
]);
